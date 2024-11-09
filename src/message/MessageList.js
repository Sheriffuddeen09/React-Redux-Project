import { Link } from "react-router-dom"
import { useState } from "react"
const MessageList = ({chat, length}) =>{

    const [isImage, setIsImage] = useState(false)

    const toggleFlex = () =>{
        setIsImage(!isImage)
    }

    return(
        <div className="translate-y-20 sm:translate-y-0 p-1 bg-white">
            <div className='text-black flex flex-row justify-between gap-16 items-center mx-2 mt-4 sm:mt-2 '>
                <div className="inline-flex gap-3">
                    <img src={chat.image} alt='imagepicture' className='rounded-full w-14 h-14 border border-blue-400 border-2' onClick={toggleFlex}/>
                <Link to={`/message/${chat.id}`} > 
                    <div>
                        <p className="font-bold capitalise">{chat.name}</p>   
                        <div className="inline-flex gap-1" style={{fontSize:'12px'}}>        
                            <p>
                            {
                                (chat.text).length <= 20 ?
                                chat.text : `${(chat.text).slice(0,15)}...`
                            }
                            </p>
                            -
                            <p className="mins">
                        {chat.date}
                        </p>
                        </div>
                
                    </div>
                    
                </Link>
                </div>
                <div>
                        <p className="bg-blue-600 rounded-full w-4 flex flex-col justify-center items-center justify-items-center h-4 text-white text-center" style={{fontSize:"9px"}}>{length}</p>
                        
                    </div>
            </div>
        </div>
      
    )
}
export default MessageList