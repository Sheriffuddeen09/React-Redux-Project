import UserList from "../user/UserLists"
import TimeAgo from "./TimeAgo"
import ReactionButton from "./ReactionButton"
import { Link } from "react-router-dom"
import {  useGetPostsQuery } from "./postsSlice"

function PostsExcept({ postId}) {

    const { post } = useGetPostsQuery('getPosts', {
      selectFromResult: ({ data }) => ({
        post: data?.entities[postId],
      }),
    });
  
    if (!post) return null;


    return (
        <div className="w-72 sm:w-96 border border-white shadow-md rounded-xl p-4 bg-white translate-y-24 mx-auto sm:my-14 mt-1 sm:translate-y-0 sm:my-10">
           {post.image && <img src={post.image} alt="Post visual" className="w-96 h-80" /> }
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