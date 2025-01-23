import UserList from "../user/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetPostsQuery, useDeletePostMutation } from "./postsSlice"

function SinglePage (){

    const { postId } = useParams()
    const navigate = useNavigate()

    const [deletePost] = useDeletePostMutation()
    
    const {post, isLoading } = useGetPostsQuery('getPosts', {
        selectFromResult: ({data, isLoading}) =>({
            post:data?.entities[postId],
            isLoading
        })
    })

    if(isLoading) return <p>Loading....</p>


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
        <div className="w-72 sm:w-96 border text-black border-black rounded-xl p-4 mx-auto mt-28 mb-10">
          {post.image && <img src={post.image} alt="imagepicture" className="w-96 h-80"/>}
        <h1 className="text-black text-sm font-bold captalize">
            {post.length}
        </h1>
        <h1 className="text-black text-sm font-bold captalize">
            {post.title}
        </h1>
        <Link to={`/post/edit/${post.id}`} className="text-white bg-black py-2 px-3 w-28 my-2 rounded-xl">
            Edit Post
        </Link>
        <button type="button" onClick={handleDelete} className="text-white bg-red-600 p-1 w-28 my-2 translate-x-5 rounded-xl">Delete</button>
        <p className="text-black text-sm my-2 font-bold">
            <UserList userId={post.userId} />
        </p>
        <p className="text-black text-sm  italic">
            <TimeAgo timestamp={post.date} />
        </p>
        <div> <ReactionButton post={post}/> </div>

    </div>
    )
}

export default SinglePage