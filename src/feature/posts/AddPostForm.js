import { useState } from "react"
import {  useSelector } from "react-redux"
import { useAddPostsMutation } from "./postsSlice"
import { selectAllUsers } from "../user/userSlice"
import { useNavigate } from "react-router-dom"

function AddPostForm (){

    const users = useSelector(selectAllUsers)
    const [addPosts, {isLoading}] = useAddPostsMutation()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const navigate = useNavigate()

    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(e.target.value)


    const cansave = [title, content, userId].every(Boolean) && !isLoading

    const handleSubmit = async () =>{

        if(cansave){
            try {
                await addPosts({title, body: content, userId}).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
    }
    catch(err){

    }
}
    }

    const options = (
        <>
            {
                users.map((user) =>(
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))
            }
        </>
    )

    return (
        <form className="flex flex-col gap-2 items-center  mt-5 text-black">
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Title</label>
            <input type="text" placeholder="" className="rounded-xl w-80 border border-2 border-blue-300 bg-gray-300 p-2" value={title} onChange={onTitle} />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">User-Name</label>
            <select className="rounded-xl w-80 border border-2 border-blue-300 bg-gray-300 p-2" value={userId} onChange={onUserId}>{options}</select>
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Content</label>
            <textarea rows={6} type="text" className="rounded-xl w-80 border bg-gray-300 border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            </div>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
        </form>
    )
}

export default AddPostForm