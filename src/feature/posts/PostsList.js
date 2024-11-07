import PostsExcept from "./PostsExcept"
import { useGetPostsQuery } from "./postsSlice"
import logo from '../image/image.jpg'
import Slider from "./Slider"
import { Link } from "react-router-dom"




function PostsList (){

   

    const {
        data:posts,
        isloading ,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery('getPosts')
    


    let content

    if(isloading){
        content = <p>Loading.....</p>
    }
    
    else if (isSuccess){
        content  =  posts.ids.map((postId) =>(
                    <PostsExcept postId={postId} key={postId}/>
                    ))
               
                }
    else if (isError){
        content = <p>{error}</p>
    }

    
    return (

        <section>
            <div className="hidden sm:block mx-auto bg-white rounded-xl p-3 mt-24 sm:mt-16 h-32 -mb-20" style={{width:'470px'}}>
                <div className="inline-flex gap-1 sm:gap-3 items-center">
                    <Link to={'/me'}>
                    <img src={logo} alt="pictureimage" className="h-12 border border-gray-300 w-12 rounded-full" />
                    </Link>
                    <div className="hidden sm:block w-56 sm:w-96 px-3 py-1 h-8 rounded-3xl bg-gray-200 text-black">What's on your mind, Sheriffudden?</div>
                    <div style={{fontSize:"11px"}} className="sm:hidden block w-56 sm:w-80 px-3 py-2 h-8 rounded-3xl bg-gray-200 text-black">What's on your mind, Sheriffudden?</div>
                </div>

                <div className="block sm:hidden mx-2 w-72 bg-white rounded-xl p-3 mt-24 sm:mt-20 h-28 -mb-20">
                <div className="inline-flex gap-1 items-center">
                    <img src={logo} alt="pictureimage" className="h-12 border border-gray-300 w-12 rounded-full" />
                    <div className="hidden sm:block w-56 sm:w-80 px-3 py-1 h-8 rounded-3xl bg-gray-200 text-black">What's on your mind, Sheriffudden?</div>
                    <div style={{fontSize:"11px"}} className="sm:hidden block w-56 sm:w-80 px-3 py-2 h-8 rounded-3xl bg-gray-200 text-black">What's on your mind, Sheriffudden?</div>
                </div>
                </div>
                <div className="flex items-center justify-center gap-4 my-4">
                    <div className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-red-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <p className="text-black"> Live video</p>

                    </div>
                    <div className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                    </svg>
                    <p className="text-black"> Photo/video</p>

                    </div>
                    <div className="inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-yellow-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                    <p className="text-black"> Feeling/activity</p>

                    </div>
                </div>
            </div>
            <hr className="mt-6 w-72 sm:w-full mx-auto" />
            
            <div className="sm:hidden block  bg-white rounded-xl p-4 mt-16 translate-y-1 h-20 w-full -mb-28">
                <div className="inline-flex gap-1 sm:gap-3 items-center">
                    <img src={logo} alt="pictureimage" className="h-12 border border-gray-300 w-12 rounded-full" />
                    <div style={{fontSize:"10px"}} className="sm:hidden block w-48 sm:w-80 px-3 py-2 h-8 rounded-3xl bg-gray-200 text-black">What's on your mind, Sheriffudden?</div>
                    <div style={{fontSize:"10px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                    </svg>
                    <p className="text-black"> Photo</p>
                    </div>

            </div>
            </div>
            <div >
            <Slider />
            </div>
            {content}
        </section>

    )
}

export default PostsList