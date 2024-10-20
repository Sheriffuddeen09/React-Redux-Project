import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPosts} from "./postSlice"
import { selectAllUsers } from "../users/userSlice"

function AddPostForm (){

    const users = useSelector(selectAllUsers)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addStatusIdles, setAddStatusIdles] = useState('idle')

    const dispatch = useDispatch()

    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(e.target.value)


    const cansave = [title, content, userId].every(Boolean) && addStatusIdles === "idle"

    const handleSubmit = () =>{

        if(cansave){
            try {
        setAddStatusIdles('pending')
       
            dispatch(
                addPosts({title,
                    body: content,
                    userId})
            ).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
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
        <form className="flex flex-col gap-2 items-center mt-10 text-black">
            <input type="text" className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={title} onChange={onTitle} />
            <input type="text" className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            <select className="rounded-xl w-80 border border-2 border-blue-300 p-2" value={userId} onChange={onUserId}>{options}</select>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
        </form>
    )
}

export default AddPostForm