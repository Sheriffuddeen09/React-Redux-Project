import { useSelector } from "react-redux"


function PostsList (){
const posts = useSelector((state) => state.posts)
const content = (
    <div>
        {
            posts.map((post) =>(
                <div className="w-80 border border-black rounded-xl p-4 mx-auto my-10">
                    <h1 className="text-black text-xl font-bold captalize">
                        {post.title}
                    </h1>
                    <p className="text-black text-sm">
                        {post.content}
                    </p>
                </div>

            ))
        }
    </div>
)
    return (

        <section>
            {content}
        </section>

    )
}

export default PostsList