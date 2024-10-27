import { useSelector } from "react-redux"
import { selectPostIds } from "./postsSlice"
import PostsExcept from "./PostsExcept"
import { useGetPostsQuery } from "./postsSlice"



function PostsList (){

    const {
        isloading ,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const orderpostId = useSelector(selectPostIds)

    

    let content

    if(isloading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){
        content  =  orderpostId.map((postId) =>(
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