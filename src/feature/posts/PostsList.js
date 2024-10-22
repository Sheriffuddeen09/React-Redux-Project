import { useSelector } from "react-redux"
import {  getPostsError, getPostsStatus, selectAllPosts } from "./postSlice"
import PostsExcept from "./PostsExcept"



function PostsList (){

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    

    let content

    if(postsStatus === 'isLoading'){
        content = <p>isLoading</p>
    }
    
    else if (postsStatus === 'succeeded'){
        const sortedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = (
            <div>
                {
                    sortedPost.map((post) =>(
                    <PostsExcept post={post} />
                    ))
                }
            </div>
        )
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