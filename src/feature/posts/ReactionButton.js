import { useDispatch } from "react-redux"
import { reactionAdd } from "./postSlice"

const reactionsEmoji = {
    love: "❤️",
    like: "👍",
    smile: "😆"
} 

function ReactionButton ({post}){

const dispatch = useDispatch()

const reactmaps = Object.entries(reactionsEmoji).map(([name, emoji]) => (
    <button key={name} className="text-black mx-3 mt-2 py-1 px-3 rounded-lg bg-gray-400" onClick={() => dispatch(reactionAdd({postId: post.id, reaction: name }))} >
        {emoji} {post.reactions[name]}
    </button>
))
    return (
        <div>
            {reactmaps}
        </div>
    )
    
}

export default ReactionButton