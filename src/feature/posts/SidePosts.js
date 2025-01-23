import { useEffect, useState } from "react"
import { getMessage } from "../../api/apiSlice"
import { Link } from "react-router-dom"
import logoshe from '../image/logoshe.png'

function SidePosts (){

    const [users, setUsers] = useState([])
    const [hide, setHide] = useState(true)
    useEffect(() =>{

        getMessage().then(json =>{
            setUsers(json)
            return json
        })

        
    })

    const handleHide = () =>{
        setHide(!hide)
    }

    const usercontent = (
        <div className={`text-black bg-white gap-4 py-3 px-5  flex flex-col my-12 translate-y-1 scrollb scroll-p-0 scroll-smooth scrollbar z-10 scrollbar-thumb-gray-400 shadow-md  scrollbar-thin scrollbar-track-transparent ${hide ? "block" : "hidden"} `} style={{width:"350px", height:"600px"}}>
            <div className="flex gap-8 items-center mt-5">
                <p onClick={handleHide} className="cursor-pointer bg-[#dedee0] w-10 items-center flex flex-col items-center justify-center rounded-full p-2">X</p>
                <Link to={'/'} className="inline-flex items-center gap-1 text-blue-500 text-2xl font-bold">
                <img src={logoshe} alt="imagelogo" width={25} height={25} />
                <p>SheriffPortfilo</p>
                </Link>
            </div>
            <hr />
            <Link to={'/reel'} className="flex gap-10 items-center">
                <p onClick={handleHide} className="bg-[#dedee0] w-10 items-center flex flex-col items-center justify-center rounded-full p-2">+</p>
                <Link to={'/reel'} className="inline-flex items-center gap-1 text-black text-xl font-bold">
                <p>Create Reel</p>
                </Link>

            </Link>
            <hr />

            {
                users.map(user =>(
                    <div>
                    <Link to={`/user/${user.id}/posts`}> 
                    <div className="inline-flex items-center gap-3 mb-5">
                        <img src={user.image} alt='order' className=" rounded-full border border-2 border-blue-600 w-10 h-12 -p-14" style={{width:"50px"}}/>

                        <div className="flex flex-col">
                        
                        <p className='font-bold text-black'>{user.name} {user.names}</p>
                        <p className=' rounded-lg inline-flex text-start text-blue-500'>{user.amount} new. &nbsp;<span className="text-black">{user.date}</span></p>
                        </div>
                    </div>
                     </Link>

                        </div>
                    ))
                }
    </div>
    )


   
    return (
       
        <div>
        <div className={`hidden sm:block `}>
            {usercontent}
        </div>
       
        </div>
            
    )
}

export default SidePosts