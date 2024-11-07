import UserList from "../user/UserLists"
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
        <div className="w-80 sm:w-96 border border-white shadow-md rounded-xl p-4 bg-white translate-y-16 mx-auto my-14 sm:my-10">
           {post.image && 
           <div>
           <Video style={{width: '290px',
                              height:"300px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-80 rounded-xl mx-auto my-20 bg-black hidden sm:block">
                <source src={post.video} type="video/webm" width={400} height={400}/>
            </Video>

            <Video  style={{width: '290px',
                                height:"400px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-full relative left-56 rounded-xl sm:hidden block">
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

export default VideosExcept