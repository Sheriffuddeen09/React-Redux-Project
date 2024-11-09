import TimeAgo from "../posts/TimeAgo"
import ReactionButton from "../posts/ReactionButton"
import { Link } from "react-router-dom"
import { useGetPostsQuery } from "../posts/postsSlice"
import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'

function VideosExcept({ postId}) {

    const { post } = useGetPostsQuery('getPosts', {
      selectFromResult: ({ data }) => ({
        post: data?.entities[postId],
      }),
    });
  
    if (!post) return null;


    return (
        <div className="w-72 sm:w-96 border border-white shadow-md rounded-xl p-4 bg-white translate-y-24 mx-auto sm:my-14 mt-1 sm:translate-y-0 sm:my-10">
           {post.image && 
           <div>
           <Video style={{width: '280px',
                              height:"300px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-80 rounded-xl mx-auto my-20 bg-black hidden sm:block">
                <source src={post.video} type="video/webm" width={400} height={400}/>
            </Video>

            <Video  style={{width: '270px',
                                height:"400px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-full rounded-xl mx-auto sm:hidden block">
                <source src={post.video} type="video/webm" width={400} height={400}/>
            </Video> 
        </div>
             }
        <h1 className="text-black text-sm font-bold captalize">
            {post.length}
        </h1>
        <h1 className="text-black text-sm font-bold captalize">
            {post.title}
        </h1>
        <Link to={`/video/${post.id}`}>
        <p className="text-black text-sm">
            {post.body.substring(0, 85)}...see more
        </p>
        </Link>
      
        <p className="text-black text-sm  italic">
            <TimeAgo timestamp={post.date} />
        </p>
        <div> <ReactionButton post={post}/> </div>

    </div>
    )
}

export default VideosExcept