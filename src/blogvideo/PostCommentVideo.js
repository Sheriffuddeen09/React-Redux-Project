import { Link } from "react-router-dom"
import { useState } from "react"
const PostCommentVideo = ({comment, handleDeletevideo}) =>{

    const [isVisible, setIsVisible] = useState(false)
    const [likes, setLike] = useState(true)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleLike = () =>{
        setLike(!likes)
    }

    return(

        <div>
            <span className="postsitem postsitemvideo">
            <p className="postpara">{comment.item} </p>
            <p className="postparagr">{comment.date}</p>
            <span onClick={toggleSubmit}>
                
        <button className={`'button-menu' ${isVisible ? 'button-menu' : 'invisible'}`} style={{translate:'0px'}}> 
            <div className='menu-button'> </div>
          </button>
        </span>  
        <ul onClick={toggleLike} className="likereply">
        <li className={`'like' ${likes ? 'dislike' : 'like'}`}>Like</li>
        <li> <Link style={{
            textDecoration: 'none',
            color: 'black'
        }} to={'/reply'} >Reply</Link></li>
        </ul>
            </span>
            <span className={`'delete-bar' ${isVisible ? 'delete-bar' : 'button-menu'}`}>
            <button onClick={toggleSubmit} className={`'clos-bar' ${isVisible ? 'closee' : 'clos-bar'}`}> 
            X
            </button>
            <Link to={`/comment${comment.id}`} style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'
            }}>Edit</Link>
            <button onClick={() => handleDeletevideo(comment.id)} className="deletebuttons">
                delete
            </button>
            <p style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'

            }}>Copy </p>
            </span>
            </ div>
        

    )

}

export default PostCommentVideo