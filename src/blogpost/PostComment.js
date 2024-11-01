import { Link } from "react-router-dom"
import { useState } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"

const PostComment = ({comment, handleComment, post}) =>{

    const [isVisible, setIsVisible] = useState(false)
    const [likes, setLike] = useState(true)
    const [value] = useState(false)
    const [copy, setCopy] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleLike = () =>{
        setLike(!likes)
    }

    return(

        <div>
            <span className="postsitem postsitempost">
            <p className="postpara">{comment.item}</p>
            <p className="postparagr">{comment.date}</p>
            <span onClick={toggleSubmit}>
                
        <button className={`'button-menu' ${isVisible ? 'button-menu' : 'invisible'}`} style={{translate:'0px'}}> 
            <div className='menu-button'> </div>
          </button>
        </span>  
        <ul onClick={toggleLike} className="likereply">
        <li className={`'like colike' ${likes ? 'dislike' : 'like colike'}`}>Like</li>
        <li> <Link style={{
            textDecoration: 'none',
            color: 'black'
        }} to={'/reply'} >Reply</Link></li>
        </ul>
            </span>
        <div className="" >
        <span className={`'delete-bar' ${isVisible ? 'delete-bar' : 'button-menu'}`} >
            <div className="" style={{display:'flex', flexDirection:'column'}}>
            <button onClick={toggleSubmit} className={`'clos-bar' ${isVisible ? 'closee' : 'clos-bar'}`}> 
            X
            </button>
            <Link to={`/update/${post.id}`} style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'
            }}>Edit</Link>
            <button style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                backgroundColor:'transparent',
                border:'none',
                cursor: 'pointer'

            }} onClick={() => handleComment(comment.id)}> Delete</button>
            <CopyToClipboard text={value}
            onCopy={() => setCopy(true)}
            >
            <button className={`${copy ? 'copied' : 'copy'}`} style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor:'transparent',
                border:'none'
            }}>{copy ? 'Copied' : 'Copy'}</button>
            </CopyToClipboard>
            </div>
            </span>
            
        </div>
            </ div>
        

    )

}

export default PostComment