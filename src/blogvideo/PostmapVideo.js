import PostListVideo from "./PostListVideo"
const PostmapVideo = ({video, VideohandleDelete, comment}) =>{


    return (
       <div className="allpost allpostvi">

        {
            video.map((post) =>(
                <PostListVideo key={post.id} post={post} comment={comment} VideohandleDelete={VideohandleDelete} />
            ))
        }
    </div>
    )
}
export default PostmapVideo