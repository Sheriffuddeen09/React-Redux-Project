import Users from "../user/Users"
import PostsList from "./PostsList"
import SidePost from "./SidePost"
import SidePosts from "./SidePosts"

function HomePost (){

    return(
        <section className="flex flex-row justify-between">
            <div className="hidden sm:block">
            <SidePost />
            </div>
            <PostsList />
            <div className="hidden sm:block">
            <Users />
            </div>
        </section>
    )
}

export default HomePost