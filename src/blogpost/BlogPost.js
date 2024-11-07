import Postmap from "./Postmap"

const BlogPost = ({posts}) =>{

    
    return(

        <div className='sidebar' style={{overflow:'hidden'}}>
       
        <div className="div22">
        <Postmap posts={posts}/>
        </div>
     
        </div>
    )
}
export default BlogPost