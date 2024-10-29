import { Link } from "react-router-dom"
import { useGetUsersQuery } from "./userSlice"

function UserList ({userId}){

    const {user: author}  = useGetUsersQuery('getUsers', {
        selectFromResult: ({data, isLoading}) =>({
            user: data?.entities[userId]
        })
    })
    return (
        <div>{author ? <Link to={`/user/${userId}`}>{author.name}</Link> : "Unknown Author"}</div>
    )
}

export default UserList