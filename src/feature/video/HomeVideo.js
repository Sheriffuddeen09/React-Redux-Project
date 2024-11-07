import Users from "../user/Users"
import SidePost from "../posts/SidePost"
import VideosList from "./VideosList"

function HomeVideo ({chatme}){

    return(
        <section className="flex flex-row justify-center">
            <div className="hidden sm:block fixed left-0">
            <SidePost />
            </div>
            <div className="sm:-translate-x-8">
            <VideosList chatme={chatme} />
            </div>
            <div className="hidden sm:block fixed right-0">
            <Users />
            </div>
        </section>
    )
}

export default HomeVideo