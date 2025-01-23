import { Link } from "react-router-dom"
const PostList = ({post}) =>{


  

    return(
        <div className="allpost text-black blogmediapo" style={{overflow:'hidden'}}>
        <div className='mediapost'>
            
            <div className='postflex mediaflex'>
                <img src={post.image} alt='iphone' width={30} height={30} className='postim postimmedia'/>
            <div className='div27b'>
            <p className="linecount" style={{width:'100ch'}}>
                {post.title}
            </p>
            <p className="linecounts">
                {post.date}
            </p>
            </div>
            </div>
            
            <Link to={`/post/${post.id}`} className="pte" > 
            
                { 
                    (post.body).length <= 30 ?
                    post.body : `${(post.body).slice(0,25)}...see more`
                    
                }
            </Link>
            
        </div>
       
       
        </div>
    )
}
export default PostList