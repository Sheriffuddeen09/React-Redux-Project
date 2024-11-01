import { Link } from "react-router-dom"
import { useState } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard"

const UserComment = ({comment, handleComment, post}) =>{

    const [isVisible, setIsVisible] = useState(false)
    const [likes, setLike] = useState(true)
    const [value, setValue] = useState(false)
    const [copy, setCopy] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleLike = () =>{
        setLike(!likes)
    }

    return(

        <div>
            <span className="postsitem">
            <input value={comment.item} onChange={(e) => setValue(e.target.value)} className="postpara" />
            <p className="postparagr">{comment.date}</p>
            <span onClick={toggleSubmit}>
                
        <button className={`'button-menu' ${isVisible ? 'button-menu' : 'invisible'}`}> 
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
        <div className="">
        <span className={`'menu-toggle' ${isVisible ? 'menu-toggle' : 'button-menu'}`}>
            <div className="menu-backgroud">
            <button onClick={toggleSubmit} className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
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
                backgroundColor:'transparent',
                textAlign: 'center',
                cursor: 'pointer'

        }}>{copy ? 'Copied' : 'Copy'}</button>
            </CopyToClipboard>
            </div>
            </span>
            
        </div>
            </ div>
        

    )

}

export default UserComment