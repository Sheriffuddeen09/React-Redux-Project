import { Link } from 'react-router-dom';
import './post.css';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import { useState } from "react"
import { useParams } from 'react-router-dom';
import PostComment from './PostComment'
const BlogPage = ({posts, handleDelete, comment, handleComment, handleSubmit, title,comments, setTitle}) =>{

    const {id} = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    const showUrl = window.location.href 

    const [share, setShare] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isImage, setIsImage] = useState(false)
    const [like, setLike] = useState(0)
    const [likes, setLikes] = useState(false)

    const toggleFlex = () =>{
        setIsImage(!isImage)
    }
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }
    const handleCount = () =>{
        setLikes(!likes)
        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }
    const toggleShare = () =>{
        setShare(!share)
    }

    return(
        <div className='postbodyme allpostblog' style={{width: '100%', overflow:'hidden', marginTop:'2px', translate:'8px'}} 
        
        >
        {post &&
        <div style={{
            translate:'140px'
        }}>        
            <div className='postflexing allflexpost'>
                <img src={post.logo} alt='iphone' width={30} height={30} className='postIma'/>
            <div className='div27'>
            <p className='linecount lineblog' style={{width:'100ch'}}>
                {post.title}
            </p>
            <p className='linecounts lineblogs'>
                {post.date}
            </p>
            </div>
        <div className='menu-me menu-count' onClick={toggleSubmit}>
        <span className='buttonmove'>
        <button className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`} style={{backgroundColor:'whitesmoke', height:'30px'}}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <div className='postba'>
        <span className={`'menu-icons' ${isVisible ? 'menu-icons' : 'button-menu'}`}>
        <div className="menu-backgroud">
          <button className={`'close-bar' ${isVisible ? 'closed' : 'close-bar'}`}> 
          X
          </button>
        
        <Link style={{
                textDecoration: 'none',
                marginTop: '10px',
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer'
            }} to={`/update/${post.id}`}> Edit</Link>
        </div>
        </span>
        </div>
        <button onClick={() => handleDelete(post.id)} className='deletebutton deleteblogbutton'>x</button>
        </div>
            </div>
            <p className='pte blogpostlink' style={{minWidth:'17ch'}}> 
            {post.name}
            </p>
            <span onClick={toggleFlex} className='moveimpost'>
            <img src={post.image} alt='phone' height={500} width={600} className="blogimg blogimgpost"/>
            </span>
            <div className={`'menu-image' ${isImage ? 'menu-image' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={post.image} alt='phone' height={400} width={400} className="blogflex"/>
       
       </div>
       <p style={{
        translate:'200px', marginTop:'-38px', backgroundColor:'whitesmoke',width:'90px',borderRadius:'10px'
       }}>❤️👍😄{like}</p>
       <div className='moveline'>
        <span className='buttonicon buttoniconpost'>
        <button style={{
            background:'whitesmoke',
            border: 'none',
            padding:'5px',
            width:'60px', 
            borderRadius: '15px',
            translate: '-20px'
        }} className={`'dislike islike' ${likes ? 'like likes' : 'dislike islike'}`} onClick={handleCount}>like</button>
        <button className='btnicons'>{comment}</button>
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
        <div>
            {
                comments.map(comment=>(
                    <PostComment key={post.id} post={post} comment={comment} handleComment={handleComment} />
                ))
            }
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='comment'
                value={title}
                className='inputblog'
                onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
        </div>
            }
            </div>
    )
}
export default BlogPage