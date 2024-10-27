import { useSelector } from "react-redux"
import { selectAllUsers } from "./userSlice"
import { Link } from "react-router-dom"

function UserList ({userId}){

    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)
    return (
        <div>{author ? <Link to={`/user/${userId}`}>{author.name}</Link> : "Unknown Author"}</div>
    )
}

export default UserList