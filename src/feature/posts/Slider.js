import { useEffect, useState } from "react"
import { getMessage} from "../../api/apiSlice"
import { Link } from "react-router-dom"

function Slider (){


    const [users, setUsers] = useState([])
    useEffect(() =>{

        getMessage().then(json =>{
            setUsers(json)
            return json
        })

        
    })

    const usercontent = (
        <div className="text-black bg-white gap-4 bg-gray-100 sm:mt-16 mt-28 py-3 px-5 h-52 -mb-20  flex flex-row rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent shadow-md  scrollbar-thin scrollbar-track-transparent" style={{width:"470px"}}>
            {
                users.map(user =>(
                    <div>
                    <Link to={`/user/${user.id}/posts`}> 
                        <img src={user.post} alt='order' className=" rounded-xl w-96 h-44 -p-14" style={{width:"300px"}}/>

                        <div className="bg-grays rounded-xl h-44 relative bottom-44 sm:bottom-44">
                        <p className=' relative right-12 text-sm text-white w-5 rounded-lg top-2 text-center bg-blue-500'>{user.amount}</p>
                        <p className='font-bold text-white relative top-20 left-2 w-28'>{user.name}</p>
                        <p className='font-bold text-white relative top-20 left-2 w-28'>{user.names}</p>
                        </div>
                     </Link>

                        </div>
                    ))
                }
    </div>
    )

    const usercontentm = (
        <div className="text-black bg-white gap-4 bg-gray-100 sm:mt-16 mt-28 py-3 px-5 h-52 overflow-hidden -mb-20  flex flex-row rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent shadow-md  scrollbar-thin scrollbar-track-transparent" style={{width:"290px"}}>
            {
                users.map(user =>(
                    <div>
                    <Link to={`/user/${user.id}/posts`}> 
                        <img src={user.post} alt='order' className=" rounded-xl w-96 h-44 -p-14" style={{width:"300px"}}/>

                        <div className="bg-grays rounded-xl h-44 relative bottom-44 sm:bottom-44">
                        <p className=' relative right-12 text-sm text-white w-5 rounded-lg top-2 text-center bg-blue-500'>{user.amount}</p>
                        <p className='font-bold text-white relative top-20 left-2 w-28'>{user.name}</p>
                        <p className='font-bold text-white relative top-20 left-2 w-28'>{user.names}</p>
                        </div>
                    </Link>
                        </div>
                    ))
                }
    </div>
    )

   
    return (
       
        <div>
        <div className="hidden sm:block">
            {usercontent}
        </div>
        <div className="sm:hidden block">
            {usercontentm}
        </div>
        </div>
            
    )
}

export  default Slider