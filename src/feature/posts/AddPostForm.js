import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postsAdded } from "./postSlice"
import { selectAllUsers } from "../users/userSlice"

function AddPostForm (){

    const users = useSelector(selectAllUsers)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()

    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(e.target.value)

    const handleSubmit = () =>{

        if (title && content ){
            dispatch(
                postsAdded(
                    title,
                    content,
                    userId,
                    
                )
            )
            setTitle('')
            setContent('')
        }
    }

    const cansave = Boolean(title) && Boolean(content) && (userId)
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
        <form className="flex flex-col gap-2 items-center mt-10 text-black">
            <input type="text" className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={title} onChange={onTitle} />
            <input type="text" className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            <select className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={userId} onChange={onUserId}>{options}</select>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
        </form>
    )
}

export default AddPostForm