import {useState} from 'react'

const MessageComment = ({comment, ChatDelete}) =>{

    const [isVisible, setIsVisible] = useState(false)

    const toggleSubmit = () =>{
        setIsVisible(!isVisible)
    } 
   

    return(

        <div className='bg-white p-2 w-52 my-2 rounded-xl mx-10'>
            
            <p className="postpara">{comment.messageMe} </p>
            <p className="postparagr">{comment.date}</p>
            
    </div>
    )

}

export default MessageComment