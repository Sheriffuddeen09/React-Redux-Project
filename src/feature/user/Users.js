
import { Link } from "react-router-dom"
import { useGetUsersQuery } from "./userSlice"

function Users (){

    const { 
        data:users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('getUsers')
    

    let content
    if(isLoading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){
     content = users.ids.map(userId =>(
                    <div key={userId} >
                        <Link className="" to={`/user/${userId}`}>
                        <h1 className="text-blue-300 underline">{users.entities[userId].name}</h1>
                        </Link>
                    </div>
                ))
            }
            else if (isError){
                content = <p>{error}</p>
            }

    return (
        <section className="p-4 flex flex-col justify-center items-center">
            {content}
        </section>
    )
}

export default Users