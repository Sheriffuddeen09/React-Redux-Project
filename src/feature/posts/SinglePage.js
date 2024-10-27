import UserList from "../user/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link, useNavigate, useParams } from "react-router-dom"
import {  useSelector } from "react-redux"
import { selectPostById, useDeletePostMutation } from "./postsSlice"

function SinglePage (){

    const { postId } = useParams()
    const [deletePost] = useDeletePostMutation()
    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const navigate = useNavigate()


    if(!post){
        return <p className="text-4xl font-bold text-center mt-60">post is not Found Go to <Link to={'/'} className="text-blue-400 underline">Homepage</Link></p>
    }


    const handleDelete = async () =>{

            try {
           
               await deletePost({ id: post.id }).unwrap()

            navigate('/')
    }
    catch(err){
        
    }
    
    }


    return (
        <div className="w-80 border border-white rounded-xl p-4 mx-auto my-10">
        <h1 className="text-white text-xl font-bold captalize">
            {post.title}
        </h1>
        <p className="text-white text-sm">
            {post.body}
        </p>
        <Link to={`/post/edit/${post.id}`} className="text-blue-500 bg-white py-1 px-3 w-28 my-2 rounded-xl">
            Edit Post
        </Link>
        <button type="button" onClick={handleDelete} className="text-white bg-red-600 p-1 w-28 my-2 translate-x-5 rounded-xl">Delete</button>
        <p className="text-white text-sm my-2 font-bold">
            <UserList userId={post.userId} />
        </p>
        <p className="text-white text-sm  italic">
            <TimeAgo timestamp={post.date} />
        </p>
        <div> <ReactionButton post={post}/> </div>

    </div>
    )
}

export default SinglePage