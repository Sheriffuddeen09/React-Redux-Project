import { useParams } from "react-router-dom"

const BlogPage = ({posts}) =>{

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return(
        <div className='postbodyme allpostblog' style={{width: '100%', overflow:'hidden', marginTop:'2px', translate:'8px'}} 
        
        >
        {post &&
        <div style={{
            translate:'140px'
        }}>        
            <div className='postflexing allflexpost'>
                <img src={post.image} alt='iphone' width={30} height={30} className='postIma'/>
            <div className='div27'>
            <p className='linecount lineblog' style={{width:'100ch'}}>
                {post.title}
            </p>
            <p className='linecounts lineblogs'>
                {post.date}
            </p>
            </div>
            </div>
            <p className='pte blogpostlink' style={{minWidth:'17ch'}}> 
            {post.body}
            </p>
        
        </div>
            }
            </div>
    )
}
export default BlogPage