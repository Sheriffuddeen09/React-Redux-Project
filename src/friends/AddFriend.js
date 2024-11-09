import { Link } from "react-router-dom"
import { useDeleteSingleMutation, useGetSinglesQuery } from "../feature/user/usersingleSlice"


function AddFriend (){

    const [deleteUser] = useDeleteSingleMutation()
    const { 
        data:users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSinglesQuery('getSingles')
    

    let content
    if(isLoading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){

   content = (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between gap-2 sm:gap-10">
            {
                 users.ids.map(userId =>(
                    <div>
                    <Link to={`/user/${userId}`} className="text-xl my-4 font-bold">
                    {users.entities[userId].name}
                    {users.entities[userId].names}
                    <p className="" style={{fontSize:"11px"}}>mutual friends are connected</p>
                    </Link>
                    <div className="inline-flex gap-3 my-2 flex-wrap ">
                        <button className="bg-[#dedee0] sm:w-32 w-40 text-black p-2 rounded-xl">{users.entities[userId].add}</button>
                        <button className="bg-blue-600 text-white p-2 rounded-xl sm:w-32 w-40" onClick={() => deleteUser({id: userId})}>{users.entities[userId].delete}</button>
                    </div>
                    </div>
                ))
            }
        </div>
         )
        }
        else if (isError){
            content = <p>{error}</p>
        }


    return (
        <section>
            {content}
        </section>
    )
}

export default AddFriend