import UserList from "../users/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"

function PostsExcept ({post}){

    return (
        <div className="w-80 border border-white rounded-xl p-4 mx-auto my-10">
        <h1 className="text-white text-xl font-bold captalize">
            {post.title}
        </h1>
        <p className="text-white text-sm">
            {post.content}
        </p>
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