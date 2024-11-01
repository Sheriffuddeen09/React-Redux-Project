import PostList from "./PostList"
const Postmap = ({posts, handleDeletePost, comment}) =>{


    return (
       <div className="allmedia">

        {
            posts.map((post) =>(
                <PostList key={post.id} post={post} comment={comment} handleDeletePost={handleDeletePost} />
            ))
        }
    </div>
    )
}
export default Postmap