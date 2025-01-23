import PostList from "./PostList"
const Postmap = ({posts}) =>{


    return (
       <div className="allmedia">

        {
            posts.map((post) =>(
                <PostList key={post.id} post={post} />
            ))
        }
    </div>
    )
}
export default Postmap