import { useSelector } from "react-redux"
import {  getPostsError, getPostsStatus, selectPostsByIds} from "./postSlice"
import PostsExcept from "./PostsExcept"



function PostsList (){
    const orderpostId = useSelector(selectPostsByIds)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    

    let content

    if(postsStatus === 'isLoading'){
        content = <p>isLoading</p>
    }
    
    else if (postsStatus === 'succeeded'){
        content  =  orderpostId.map((postId) =>(
                    <PostsExcept postId={postId} key={postId}/>
                    ))
               
                }
    else if (postsStatus === 'failed'){
        content = <p>{error}</p>
    }

    return (

        <section>
            {content}
        </section>

    )
}

export default PostsList