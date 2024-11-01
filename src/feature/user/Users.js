import islam from '../image/islam.jpg'
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
                        <h1 className="text-black font-bold hover:bg-[#dedee0] w-full rounded-xl py-2 px-3">{users.entities[userId].name}</h1>
                        </Link>
                    </div>
                ))
            }
            else if (isError){
                content = <p>{error}</p>
            }

    return (
        <section className="text-black bg-gray-100 p-2 w-96 mx-auto flex flex-col rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb hover:scrollbar-thumb-gray-700 shadow-md  scrollbar-thin scrollbar-track-transparent" style={{height:"625px"}}>
        <section className="p-4 flex flex-col justify-center items-start my-14">
            <div className="flex justify-between gap-3 items-center text-black sm:py-1 px-3 -mb-7  sm:mb-0 mt-20 sm:mt-0 py-8">
                <p className="font-bold text-xl text-gray-400">Your Pages and Profiles</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

            </div>
            <div className="inline-flex items-center my-2 gap-3 hover:bg-[#dedee0] py-1 px-5 rounded-xl">
            <img src={islam} width={30} height={30} alt="logo" className="border rounded-full" />
            <p style={{fontSize:"15px"}}className="hover:bg-[#dedee0] capitalize font-bold">Knowledge about islam</p>
                </div>
            <div className='flex flex-col items-center'>
                <div className="inline-flex items-center gap-3 hover:bg-[#dedee0] py-1 px-5 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                    <p style={{fontSize:"12px"}}className="capitalize font-bold text-gray-400 text-sm">Switch to page</p>
                </div>
                <div className="inline-flex items-center my-2 gap-3 hover:bg-[#dedee0] py-1 px-5 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>

                    <p style={{fontSize:"12px"}}className="capitalize font-bold text-gray-400">Create a promotion</p>
                </div>
                <div className='my-2 w-72 bg-gray-400 h-0.5'> </div>
            </div>
            
            <p className="text-black px-3 font-bold text-2xl my-3 py-">Friends</p>
            {content}
        </section>
        </section>
    )
}

export default Users