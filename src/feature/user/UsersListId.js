import { useSelector } from "react-redux"
import { selectUsersById } from "./userSlice"
import { Link, useParams } from "react-router-dom"
import { useGetPostsByUserIdQuery } from "../posts/postsSlice"

function UsersListId (){

    const {userId} = useParams()
    const user= useSelector((state) => selectUsersById(state, Number(userId)))
    
    const {
        data: postForUser,
        isloading ,
        isSuccess,
        isError,
        error
    } = useGetPostsByUserIdQuery(userId)

    let content

    if(isloading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){
        const {ids, entities} = postForUser
        content = ids.map(id => (
                        <div key={id}>
                           <Link to={`/post/${id}`}>
                            <h1 className="text-sm text-blue-200 underline"> {entities[id].title}</h1>
                            </Link>
                        </div>
                    ))
    }
    else if (isError){
        content = <p>{error}</p>
    }

     
        
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