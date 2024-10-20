import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from "./postSlice"
import { useEffect } from "react"
import PostsExcept from "./PostsExcept"



function PostsList (){

    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() =>{
        if(postsStatus === 'idle'){
        dispatch(fetchPosts())
    }
    }, [postsStatus, dispatch])

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