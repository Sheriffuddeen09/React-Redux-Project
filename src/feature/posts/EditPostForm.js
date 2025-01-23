import { useEffect, useState } from "react"
import { useDeletePostMutation,useGetPostsQuery,useUpdatePostMutation } from "./postsSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useGetUsersQuery } from "../user/userSlice"

function EditPostForm (){

    const { postId } = useParams()
    
    const [deletePosts, ] = useDeletePostMutation()
    const [updatePost, {isLoading}] = useUpdatePostMutation()

    const {post, isLoading:isLoadingPosts, isSuccess} = useGetPostsQuery('getPosts', {
        selectFromResult:({data, isLoading, isSuccess}) =>({
            post: data?.entities[postId],
            isLoading,
            isSuccess
        })
    })


    const {data: users, isSuccess:isSuccessUsers} = useGetUsersQuery('getUsers')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const navigate = useNavigate()
    const onTitle = (e) => setTitle(e.target.value)
    const onContent = (e) => setContent(e.target.value)
    const onUserId = (e) => setUserId(Number(e.target.value))

    useEffect(() =>{

        if(isSuccess){
            setTitle(post.title)
            setContent(post.body)
            setUserId(post.userId)
        }
        
    }, [isSuccess, post?.title, post?.body, post?.userId])

    if (isLoadingPosts) return <p>Loading...</p>

    if(!post){
        return (
            <section>
                <h2>Post not Found</h2>
            </section>
        )
    }
    const cansave = [title, content, userId].every(Boolean) && !isLoading

    const handleSubmit = async () =>{

        if(cansave){
            try {
                  await updatePost({ id: post?.id, title, body: content, userId}).unwrap()
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


    let usersOptions
    if (isSuccessUsers) {
        usersOptions = users.ids.map(id => (
            <option
                key={id}
                value={id}
            >{users.entities[id].name}</option>
        ))
    }

    return (
        <form className="flex flex-col gap-2 items-center  mt-20 text-black">
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Title</label>
            <input type="text" placeholder="" className="rounded-xl w-72 sm:w-80 border border-2 border-blue-300 bg-gray-300 p-2" value={title} onChange={onTitle} />
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">User-Name</label>
            <select className="rounded-xl w-72 sm:w-80 border border-2 border-blue-300 bg-gray-300 p-2" value={userId} onChange={onUserId}>{usersOptions}</select>
            </div>
            <div className="flex flex-col gap-2">
            <label className="text-start text-white text-xl">Post Content</label>
            <textarea rows={6} type="text" className="rounded-xl w-72 sm:w-80 border bg-gray-300 border-2 border-blue-300 p-2" value={content} onChange={onContent} />
            </div>
            <button disabled={!cansave} onClick={handleSubmit} type="button" className="rounded-xl w-72 sm:w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Send</button>
            <button disabled={!cansave} onClick={onDeletePostClicked} type="button" className="rounded-xl w-72 sm:w-80 border border-2 border-blue-600 p-2 bg-blue-600 text-white">Delete</button>
        </form>
    )
}

export default EditPostForm