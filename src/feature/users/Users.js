import { useSelector } from "react-redux"
import { selectAllUsers } from "./userSlice"
import { Link } from "react-router-dom"

function Users (){

    const users = useSelector(selectAllUsers)

    const content = (
        <div>
            {
                users.map(user =>(
                    <div key={user.id} >
                        <Link className="" to={`/user/${user.id}`}>
                        <h1 className="text-blue-300 underline">{user.name}</h1>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
    return (
        <section className="p-4 flex flex-col justify-center items-center">
            {content}
        </section>
    )
}

export default Users