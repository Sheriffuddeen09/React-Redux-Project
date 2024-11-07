import Users from "../user/Users"
import PostsList from "./PostsList"
import SidePost from "./SidePost"

function HomePost ({chatme}){

    return(
        <section className="flex flex-row justify-center">
            <div className="hidden sm:block fixed left-0">
            <SidePost />
            </div>
            <div className="sm:-translate-x-8">
            <PostsList chatme={chatme} />
            </div>
            <div className="hidden sm:block fixed right-0">
            <Users />
            </div>
        </section>
    )
}

export default HomePost