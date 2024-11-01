import { Link } from "react-router-dom"
import './post.css';
import { useState } from "react"
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
const PostList = ({post, handleDeletePost, comment}) =>{

    const showUrl = window.location.href 

    const [isVisible, setIsVisible] = useState(false)
    const [isImage, setIsImage] = useState(false)
    const [share, setShare] = useState(false)
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    const [likes, setLikes] = useState(false)

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

    return(
        <div className="allpost blogmediapo" style={{overflow:'hidden'}}>
        <div className='mediapost'>
            
            <div className='postflex mediaflex'>
                <img src={post.logo} alt='iphone' width={30} height={30} className='postim postimmedia'/>
            <div className='div27b'>
            <p className="linecount" style={{width:'100ch'}}>
                {post.title}
            </p>
            <p className="linecounts">
                {post.date}
            </p>
            </div>
        <div className='menu-menu'>
        <span>
        <button onClick={toggleSubmit} className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`} style={{backgroundColor:'whitesmoke', height:'30px'}}> 
            <div className='menu-button' > </div>
          </button>
        </span>   
        <button onClick={() => handleDeletePost(post.id)} className="deletebutton">
                X
            </button>
        <div className='postba'>
        </div>
        </div>
            </div>
            
            <Link to={`/post/${post.id}`} className="pte" > 
            
                { 
                    (post.name).length <= 30 ?
                    post.name : `${(post.name).slice(0,25)}...see more`
                    
                }
            </Link>
            
        </div>
        <div>
        <span className={`'menu-icon' ${isVisible ? 'menu-icon' : 'button-menu'}`}>
            <div className="menu-backgroud">
            <button onClick={toggleSubmit} className={`'close-bar' ${isVisible ? 'cancelled' : 'close-bar'}`}> 
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
        <div className={`disablemenu ${isVisible ? 'disablemenu' : 'visible'}`} >
        <span onClick={toggleFlex} className='moveimgpost'>
            <img src={post.image} alt='phone' height={500} width={600} className="blogimg blogimgpost"/>
         </span>
        <div className={`'menu-image' ${isImage ? 'menu-image' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={post.image} alt='phone' height={500} width={400} className="blogflex"/>
        <span className="limoves">
        <button className="btn-slex" ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className="btn-slex" onClick={toggleShare}>share</button>
        </span>
       </div>
       <div className="nomoveline">
       <span className="commentline">
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`} ><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
        <button className={`'btnicon' ${isImage ? 'btnicon' : 'btn-flex'}`}  onClick={toggleShare}>share</button>
        <button className={`'menlike' ${likes ? 'showlike' : 'menlike'}`}  onClick={handleCount}>{like}</button>
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
        </div>
    )
}
export default PostList