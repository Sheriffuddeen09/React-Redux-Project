import UserList from "../user/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectPostById } from "./postsSlice"

function PostsExcept ({postId}){

    const post = useSelector((state) => selectPostById(state, postId))

    return (
        <div className="w-80 sm:w-96 border border-black rounded-xl p-4 translate-y-16 mx-auto my-14 sm:my-10">
            <img src={post.image} alt="imagepicture" className="w-96 h-80"/>
        <h1 className="text-black text-sm font-bold captalize">
            {post.length}
        </h1>
        <h1 className="text-black text-sm font-bold captalize">
            {post.title}
        </h1>
        <Link to={`/post/${post.id}`}>
        <p className="text-black text-sm">
            {post.body.substring(0, 85)}...see more
        </p>
        </Link>
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

export default PostsExcept