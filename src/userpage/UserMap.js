import { Link } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import {useState} from 'react'
import './user.css'
const UserMap = ({post, userDelete,comment}) =>{

    const [isImage, setIsImage] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [share, setShare] = useState(false)
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    const [likes, setLikes] = useState(false)

    const showUrl = window.location.href 

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const toggleShare = () =>{
        setShare(!share)
    }
    const toggleFlex = () =>{
        setIsImage(!isImage)
    }
    
    const handleCount = () =>{
        setLikes(!likes)
        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }
    
    return (
   
        <div className=''>
            <div className='userhr'> </div>
            <div className='userflex'>
                <img src={post.image} alt='iphone' width={30} height={30} className='userim'/>
            <div className='div27b'>
            <p>
                {post.username}
            </p>
            <p >
                {post.userdate}
            </p>
            </div>
            <div className='menu-menu'>
        <span>
        <button onClick={toggleSubmit} className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`} style={{backgroundColor:'whitesmoke', height:'30px', position:'relative', top:'-10px', left:'290px'}}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <button onClick={() => userDelete(post.id)} className="deletebutton" style={{position:'relative', top:'-20px', left:'300px'}}>
                X
            </button>
            </div>
        </div>
       
        <div className='postba'>  
        
        <Link to={`/user/${post.id}`} className="pte"> 
                {
                    (post.userTitle).length <= 30 ?
                    post.userTitle : `${(post.userTitle).slice(0,25)}...see more`
                }
            </Link>
        <div>
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
            <p style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'

            }}>Copy </p>
            </div>
            </span>
            
        </div>
        <span onClick={toggleFlex}>
            <img src={post.image} alt='phone' height={400} width={600} className="blogimg"/>
         </span>
        <div className={`'menu-image' ${isImage ? 'menu-image' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={post.icon} alt='phone' height={400} width={400} className="blogflex"/>
        <span>
        <button className="btn-slex" ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className="btn-slex" onClick={toggleShare}>share</button>
        </span>
       </div>
       <span>
        <button style={{
            background:'whitesmoke',
            border: 'none',
            padding:'5px',
            width:'60px', 
            borderRadius: '15px',
            translate: '-20px'
        }} className={`'dislike' ${likes ? 'like' : 'dislike'}`} onClick={handleCount}>{like}</button>
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`} ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`}  onClick={toggleShare}>share</button>
        <div className={`'menu-share' ${share ? 'menu-share' : 'button-menu'}`}>
        <button onClick={toggleShare} className={`'closing-share' ${share ? 'closing-share' : 'close-bar'}`}> 
            X
        </button>
        <div className="icon-line">
            <FacebookShareButton url={showUrl}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={showUrl}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton url={showUrl}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton url={showUrl}>
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <LinkedinShareButton url={showUrl}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton url={showUrl}>
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </div>
       </div>
       </span>
       </div>
      </div>
       
    
    )
}

export default UserMap