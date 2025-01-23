import { Link } from "react-router-dom"
import './post.css';
import { useState } from "react"
import 'react-html5video/dist/styles.css'
import {DefaultPlayer as Video} from 'react-html5video'
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
const PostListVideo = ({post, videohandleDelete, comment}) =>{

    const [isVisible, setIsVisible] = useState(false)
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    const [share, setShare] = useState(false)

    const toggleShare = () =>{
        setShare(!share)
    }
    
    const showUrl = window.location.href 
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
   
    const handleCount = () =>{

        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }

    return(
        <div  style={{translate:'-80px'}}>
        <div className='mediapost'>
            
            <div className='postflex mediaflex'>
                <img src={post.logo} alt='iphone' width={30} height={30} className='postim postimmedia'/>
            <div className='div27 div27b'>
            <p className="linecoun" style={{width:'100px'}}>
                {post.title}
            </p>
            <p className="linecouns" style={{width:'100px'}}>
                {post.date}
            </p>
            </div>
        <div className='menu-me menu-coun' style={{translate:'-50px'}}>
        <span>
        <button style={{backgroundColor:'whitesmoke', height:'30px'}} onClick={toggleSubmit} className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`}> 
            <div className='menu-button' > </div>
          </button>
        </span>   
        <button onClick={() => videohandleDelete(post.id)} className={`disablemenu ${isVisible ? 'disablemenu' : 'deletebutton'}`}>
                X
            </button>
        <div className='postba'>
        </div>
        </div>
            </div>
            <Link to={`/video/${post.id}`} className="bloglink blogmedialink" style={{translate:'20px'}}> 
              <p className="pte">  {
                    (post.name).length <= 30 ?
                    post.name : `${(post.name).slice(0,25)}...see more`
                }
                </p>
            </Link>
            
        </div>
        <div>
        <span className={`'menu-icon' ${isVisible ? 'menu-icon' : 'button-menu'}`}>
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
        <div className={`disablemenu ${isVisible ? 'disablemenu' : 'visible'}`}>
        <span>
            <Video loop style={{width: '700px',
                            
}}
           onCanPlayThrough={() => console.log('video')} className="blogimg blogimgvideo ">
                <source src={post.icon} type="video/webm" width={400} height={400} />
            </Video>
         </span>
      
       <span className='buttonicon videobutton'>
        <button className='btn-fles btnvime' onClick={handleCount}>{like}</button>
        <button className='btn-fles btnvime'><Link style={{
            textDecoration: 'none'
        }} to={`/post/${post.id}`}>{comment}</Link></button>
       <button className='btn-fles btnvime' onClick={toggleShare}>share</button>
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
export default PostListVideo