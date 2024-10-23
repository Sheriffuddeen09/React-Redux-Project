import { useSelector } from "react-redux"
import { selectUsersById } from "./userSlice"
import { Link, useParams } from "react-router-dom"
import { selectUserPost } from "../posts/postSlice"

function UsersListId (){

    const {userId} = useParams()
    const user= useSelector((state) => selectUsersById(state, Number(userId)))
    const postuser = useSelector((state) => selectUserPost(state, Number(userId)) )

    const content = (
        <div>
            {
                postuser.map(post => (
                    <div key={post.id}>
                       <Link to={`/post/${post.id}`}>
                        <h1 className="text-sm text-blue-200 underline"> {post.title}</h1>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
        
    return (
        <section className="p-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">
            {user?.name}
            </h1>
            <p className="text-xl ">
                {content}
            </p>
        </section>
    )
}

export default UsersListId