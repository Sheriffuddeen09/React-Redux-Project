import UserList from "../users/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectPostById } from "./postSlice"

function SinglePage (){

    const { postId } = useParams()
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if(!post){
        return <p className="text-4xl font-bold text-center mt-60">post is not Found Go to <Link to={'/'} className="text-blue-400 underline">Homepage</Link></p>
    }

    return (
        <div className="w-80 border border-white rounded-xl p-4 mx-auto my-10">
        <h1 className="text-white text-xl font-bold captalize">
            {post.title}
        </h1>
        <p className="text-white text-sm">
            {post.body}
        </p>
        <Link to={`/edit/${post.id}`} className="text-white text-sm">
            Edit Post
        </Link>
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