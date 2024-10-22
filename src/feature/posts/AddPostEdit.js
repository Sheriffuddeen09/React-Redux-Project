import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectPostById} from "./postSlice"
import { selectAllUsers } from "../users/userSlice"
import { useParams } from "react-router-dom"

function AddPostEdit (){

    const {id} = useParams()
    const post = useSelector(selectPostById, Number(id))

    const users = useSelector(selectAllUsers)
    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.content)
    const [picture, setPicture] = useState(post?.picture)
    const [userId, setUserId] = useState(post?.userId)
    const [addStatusIdles, setAddStatusIdles] = useState('idle')

    const dispatch = useDispatch()

    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(e.target.value)
    const onImage = (e) => setPicture(e.target.value)


    const cansave = [title, content, userId, picture].every(Boolean) && addStatusIdles === "idle"

    const handleSubmit = () =>{

        if(cansave){
            try {
        setAddStatusIdles('pending')
       
            dispatch(
        ({id, title, picture, body: content, userId, reaction: post.reactions})
            ).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            setPicture('')
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
            <label className="text-start text-white text-xl">Select Image</label>
            <input type="file" name="image" placeholder="choose image" className="rounded-xl w-80 bg-gray-300 text-white border border-2 border-blue-300 p-2" value={picture} onChange={onImage} />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Title</label>
            <input type="text" placeholder="" className="rounded-xl w-80 border border-2 border-blue-300 bg-gray-300 p-2" value={title} onChange={onTitle} />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">User-Name</label>
            <select className="rounded-xl w-80 border border-2 border-blue-300 bg-gray-300 p-2" defaultValue={userId} onChange={onUserId}>{options}</select>
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Content</label>
            <textarea rows={6} type="text" className="rounded-xl w-80 border bg-gray-300 border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            </div>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
        </form>
    )
}

export default AddPostEdit