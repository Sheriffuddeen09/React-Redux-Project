import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import SidePosts from "./SidePosts"
import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'

function ReelPosts (){

    const {userId} = useParams()
    const [users, setReels] = useState([])
    const [user, setUser] = useState(null)

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


const [index, setIndex] = useState(0);

   
useEffect(() => {
  const lastIndex = users.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, users]);


const username = (
  <div className="inline-flex items-center gap-2">
    <img src={user?.images} alt={'imagePicture'} className=" w-10 h-10 border-2 rounded-full border-blue-500 border bg-black"/>
    <p className="text-white z-10">{user?.name} {user?.names}</p>
  </div>
)

const reelcontent = <>

{users.map((user, homeIndex) => {
      let position = "nextSlide";
      if (homeIndex === index) {
        position = "activeSlide";
      }
      if (
        homeIndex === index - 1 ||
        (index === 0 && homeIndex === users.length - 1)
      ) {
        position = "lastSlide";
      }
      return (
        <article key={user.id} className={`sm:bg-gray-800 rounded-xl w-80 flex  flex-col justify-items-center mx-auto p-4 mt-16  ${position}`} style={{height:"560px"}}>
          <Link to={`/user/${user.id}`} >
          {username}
          </Link>
          <Video style={{width: '290px',
                              height:"300px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-80 rounded-xl mx-auto my-20 bg-black hidden sm:block">
                <source src={user.video} type="video/webm" width={400} height={400}/>
            </Video>
            <Video  style={{width: '290px',
                                height:"400px",
                                translate: '0px'
}}
            onCanPlayThrough={() => console.log('video')} className=" w-full relative left-56 rounded-xl sm:hidden block">
                <source src={user.video} type="video/webm" width={400} height={400}/>
            </Video> 
        

        </article>
      );
    })}
    <button className="prev fixed left-80 sm:left-96 sm:translate-x-96 sm:ml-96 flex flex-col items-center justify-center rounded-full bg-white text-black" onClick={() => setIndex(index - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
    <button className="next fixed rounded-full bg-white text-black right-72 translate-x-3 sm:left-96 sm:translate-x-32 flex flex-col items-center justify-center" onClick={() => setIndex(index + 1)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  
</>

return(
    <section className="flex flex-row justify-between bg-black items-center">
    <SidePosts />
    <div>
    {reelcontent}
     </div>
     
 </section>
)

       
}

export default ReelPosts