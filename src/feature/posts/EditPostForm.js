import { useState } from "react"
import {  useSelector } from "react-redux"
import { useDeletePostMutation,selectPostById, useUpdatePostMutation } from "./postsSlice"
import { selectAllUsers } from "../user/userSlice"
import { useNavigate, useParams } from "react-router-dom"

function EditPostForm (){

    const { postId } = useParams()
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    const [deletePosts, ] = useDeletePostMutation()
    const [updatePost, {isLoading}] = useUpdatePostMutation()


    const users = useSelector(selectAllUsers)
    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)

    const navigate = useNavigate()
    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(Number(e.target.value))


    const cansave = [title, content, userId].every(Boolean) && !isLoading

    const handleSubmit = async () =>{

        if(cansave){
            try {
                  await updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions}).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate(`/post/${post.id}`)
    }
    catch(error){
        console.error("can not be updated")
    }
}
    }

    const onDeletePostClicked = async () => {
        try {
            await deletePosts({ id: post.id }).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (err) {
            console.error('Failed to delete the post', err)
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
            <select className="rounded-xl w-80 border border-2 border-blue-300 bg-gray-300 p-2" defaultValue={userId} onChange={onUserId}>{options}</select>
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Content</label>
            <textarea rows={6} type="text" className="rounded-xl w-80 border bg-gray-300 border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            </div>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
            <button disabled={!cansave} onClick={onDeletePostClicked} type="button" className="rounded-xl w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Delete</button>
        </form>
    )
}

export default EditPostForm