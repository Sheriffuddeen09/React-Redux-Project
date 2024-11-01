import { useNavigate } from "react-router-dom"
const EditPostVideo = ({posts, setPosts, post}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = posts.map((li) =>(
            li.id === post.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setPosts(newlist)
    }

    const handleForm = (e) =>{
        e.preventDefault()
        navigate('/post')
    }
    return (

        <div className="edit">
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder="Edit text" 
                className='editinput'
                value={post.name} onChange={handleUpdate}
                />
                <button type="submit" className="butto"> Update</button>
            </form>
        </div>
    )
}
export default EditPostVideo