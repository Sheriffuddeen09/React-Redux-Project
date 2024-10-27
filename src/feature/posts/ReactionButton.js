import { useAddReactionMutation } from "./postsSlice"

const reactionsEmoji = {
    love: "❤️",
    like: "👍",
    smile: "😆"
} 

function ReactionButton ({post}){

const [addReaction] = useAddReactionMutation()

const reactmaps = Object.entries(reactionsEmoji).map(([name, emoji]) => (
    <button key={name} className="text-black mx-3 mt-2 py-1 px-3 rounded-lg bg-gray-400" onClick={ () =>{
        const newValue = post.reactions[name] + 1
        addReaction({postId: post.id, reactions:{...post.reactions, [name]:newValue} })
        }} >
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