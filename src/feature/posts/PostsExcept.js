import UserList from "../user/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectPostById } from "./postsSlice"

function PostsExcept ({postId}){

    const post = useSelector((state) => selectPostById(state, postId))

    return (
        <div className="w-80 border border-white rounded-xl p-4 mx-auto my-10">
        <h1 className="text-white text-xl font-bold captalize">
            {post.title}
        </h1>
        <Link to={`/post/${post.id}`}>
        <p className="text-white text-sm">
            {post.body.substring(0, 85)}...see more
        </p>
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

export default PostsExcept