import { useState } from "react"
import { Link, useParams } from 'react-router-dom';
import MessageComment from './MessageComment';
const MessagePage = ({chatme,ChatSubmit, ChatDelete,chatTitle, setChatTitle, chatMessages}) =>{

    const {id} = useParams()
    const post = chatme.find(post => (post.id).toString() === id)

    const [isVisible, setIsVisible] = useState(false)

    const [share, setShare] = useState(false)

    const toggleShare = () =>{
        setShare(!share)
    }
    
   
    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    }

    return(
        <div className=' text-black bg-gray-900 w-full'>
        <div className='sm:mt-12 mt-20 ' >
        {post &&
        <>      
        <div className='flex bg-white sm:px-4 sm:p-2 p-3 mt-2 justify-between items-center'>
        <Link to={`/post/${post.id}`} className="inline-flex items-center gap-5">
        <img src={post.image} alt='imagepicture' width={40} height={40} className='rounded-full w-12 h-12 border border-blue-400 border-2'/>
            <span className='mmm'>
                <p className='font-bold'> {post.name}</p>
            </span>
        </Link>
            <span>
            <svg onClick={toggleSubmit} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
         </span>
         
        </div>
    <div className="flex flex-col justify-center items-center mt-3"  style={{fontSize:"11px"}}>
<p className="bg-gray-200 w-24 rounded-xl text-center p-1">{post.dates}</p>
<p className="bg-red-100 w-72 text-center rounded-xl my-4 p-1">message and calls are end-to-end encrypted No one outside of this chat, not even sheriffchat, can read or listen to them. tap to learn more</p>
</div>

</>
        }
        </div>
        {
            chatMessages.map(comment =>(
               <div>
                    <MessageComment comment={comment} key={comment.id}/>
                    <div onClick={toggleSubmit} className={`shadow-md sm:w-52 bg-white text-black z-10 py-2 px-4 rounded-xl h-64 fixed top-28 right-10 w-40 ${isVisible ? "block" : "hidden"}`}>
                    <div className="my-4 flex flex-col capitalize gap-3 justify-start items-start">
                    <button className="hover:bg-[#dedee0] w-full text-start p-2 rounded-xl">share</button>
                    <button className="hover:bg-[#dedee0] w-full text-start p-2 rounded-xl">copy</button>
                    <button className="hover:bg-[#dedee0] w-full text-start p-2 rounded-xl" onClick={() => ChatDelete(comment.id)}>Delete chat</button>
                    </div>
                </div>   
                </div>
            ))
        }
                <form onSubmit={ChatSubmit} >
                <input type='text' 
                placeholder='Message'
                className="w-72 py-2 p-4 mx-auto mt-52 flex justify-center items-center -translate-y-2  rounded-3xl"
                value={chatTitle}
                onChange={(e) => setChatTitle(e.target.value)}
                />
            </form>    
        </div>           

   
    )
}
export default MessagePage