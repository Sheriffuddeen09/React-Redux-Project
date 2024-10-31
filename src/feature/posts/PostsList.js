import PostsExcept from "./PostsExcept"
import { useGetPostsQuery } from "./postsSlice"



function PostsList (){

    const {
        data:posts,
        isloading ,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')
    

    let content

    if(isloading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){
        content  =  posts.ids.map((postId) =>(
                    <PostsExcept postId={postId} key={postId}/>
                    ))
               
                }
    else if (isError){
        content = <p>{error}</p>
    }

    return (

        <section>
            {content}
        </section>

    )
}

export default PostsList