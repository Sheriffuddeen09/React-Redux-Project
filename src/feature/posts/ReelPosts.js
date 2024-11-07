import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import SidePosts from "./SidePosts"

function ReelPosts (){

    const {userId} = useParams()
    const [reels, setReels] = useState([])
    const [user, setUser] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reels.length)
    }

    const prevImage = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reels.length) % reels.length)
    }

    useEffect(() =>{
    const fetchReels = async () =>{

        try{
            const userResponse = await axios.get(`http://localhost:3500/users/${userId}`)
            setUser(userResponse.data);
        
            const reelResponse = await axios.get(`http://localhost:3500/posts?userId=${userId}`)
            setReels(reelResponse.data)
        }
        catch(error){
            console.log('Error: fetching data:', error)
        }
    }
    fetchReels()

},[userId])







const reelcontent = <div className="">
        <article  className={`bg-gray-800 p-3 h-96 -translate-x-64`} style={{width:"400px"}}>
         <img src={reels[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className=" w-80 rounded-xl bg-white z-10 mx-auto my-20 bg-black hidden sm:block" style={{height:"450px"}}/>
        {user && <p className="text-white z-10">{user.name}</p>}
        {user && <p className="text-white z-10">{user.names}</p>}

        </article>
    
    <button className="prev" onClick={prevImage}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </button>
    <button className="next" onClick={nextImage}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </button>
  
</div>
return(
    <section className="flex bg-black flex-row justify-between">
    <SidePosts />
    <div>
    {reelcontent}
     </div>
 </section>
)

       
}

export default ReelPosts