const MessageComment = ({comment}) =>{


    return(

        <div className='bg-white p-2 w-52 my-2 rounded-xl mx-10'>
            
            <p className="postpara">{comment.name} </p>
            <p className="postparagr">{comment.date}</p>
            
    </div>
    )

}

export default MessageComment