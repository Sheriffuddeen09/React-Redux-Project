import { useSelector } from "react-redux"
import { selectAllUsers } from "./userSlice"

function UserList ({userId}){

    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)
    return (
        <div>{author ? author.name : "Unknown Author"}</div>
    )
}

export default UserList