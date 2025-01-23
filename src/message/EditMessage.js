import { useNavigate } from "react-router-dom"

function EditMessage ({chatMessages, comment, chat, setChatMessages}){

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = chatMessages.map((li) =>(
            li.id === comment.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setChatMessages(newlist)
    }

    const handleForm = (e) =>{
        e.preventDefault()
        navigate(`/message `)
    }
    return (

        <div className=" p-4 sm:w-96 mt-20 w-72  items-center rounded-lg mx-auto h-60">
        <form onSubmit={handleForm} className="flex flex-col">
            <input type="text" name="name" placeholder="Edit Message" 
            className='border-2 border-blue-700 rounded-lg px-2 w-60 sm:w-80 mt-1 p-1'
            value={comment.name} onChange={handleUpdate}
            />
                <div className="inline-flex sm:gap-20 gap-4 items-center my-4">
                <button type="submit" className=" p-2 w-36 rounded-lg text-white bg-blue-700"> Save</button>
                </div>
            </form>
        </div>
    )
}
export default EditMessage