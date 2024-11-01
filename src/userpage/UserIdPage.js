import { Link } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton,TelegramShareButton, EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, TelegramIcon, LinkedinIcon, EmailIcon } from "react-share";
import { useState } from "react"
import { useParams } from 'react-router-dom';
import UserComment from './UserComment'

const UserIdPage = ({users, userDelete, comment, handleComment, handleSubmit, title,comments, setTitle}) =>{

    const {id} = useParams()
    const post = users.find(post => (post.id).toString() === id)

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
        <div className='postbo'>
        {post &&
        <>        
            <div className='postflexing'>
                <img src={post.icon} alt='iphone' width={30} height={30} className='postIma'/>
            <div className='div27'>
            <p>
                {post.username}
            </p>
            <p >
                {post.userdate}
            </p>
            </div>
        <div className='menu-me' onClick={toggleSubmit}>
        <span>
        <button className={`'button-bar' ${isVisible ? 'button-bar' : 'invision'}`} style={{backgroundColor:'whitesmoke', height:'30px'}}> 
            <div className='menu-button'> </div>
          </button>
        </span>   
        <div className='postba'>
        <span className={`'menu-toggle' ${isVisible ? 'menu-toggle' : 'button-menu'}`}>
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
        <button onClick={() => userDelete(post.id)} className='deletebutton'>x</button>
        </div>
            </div>
            <p className='pte'> 
            {post.userTitle}
            </p>
            <span onClick={toggleFlex}>
            <img src={post.image} alt='phone' height={400} width={600} className="blogimg"/>
            </span>
            <div className={`'menu-image' ${isImage ? 'menu-image' : 'button-menu'}`}>
        <button onClick={toggleFlex} className={`'close-bar' ${isImage ? 'closed' : 'close-bar'}`}> 
            X
            </button>
        <img src={post.image} alt='phone' height={400} width={400} className="blogflex"/>
       </div>
        
        <span className='buttonicon'>
        <button style={{
            background:'whitesmoke',
            border: 'none',
            padding:'5px',
            width:'60px', 
            borderRadius: '15px',
            translate: '-20px'
        }} className={`'dislike' ${likes ? 'like' : 'dislike'}`} onClick={handleCount}>{like}</button>
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
        <div>
            {
                comments.map(comment=>(
                    <UserComment key={post.id} post={post} comment={comment} handleComment={handleComment} />
                ))
            }
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='comment'
                value={title}
                className='input'
                onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
        </>
            }
            </div>
    )
}
export default UserIdPage