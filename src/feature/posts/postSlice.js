import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {
        id:"1",
        title: "My Love",
        content: "The love i have for you is real not for fake",
        date: sub(new Date(), {minute: 10}).toISOString(),
        reactions: {
            love: 0,
            like: 0,
            smile: 0
        }
    },
    {
        id:"2",
        title: "Be honest",
        content: "Those who are honest are those who are pious of the heart",
        date: sub(new Date(), {minute: 5}).toISOString(),
        reactions: {
            love: 0,
            like: 0,
            smile: 0
        }

    }
]

export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postsAdded:{
            reducer(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId){
            return{
                payload:{
                    title,
                    content,
                    id: nanoid(),
                    userId,
                    date: new Date().toISOString(),
                    reactions: {
                        love: 0,
                        like: 0,
                        smile: 0
                    }
                }
            }
        }
    },
    reactionAdd(state, action){

        const {postId, reaction} = action.payload
        const icons = state.find(post => post.id === postId)
        if(icons){
            icons.reactions[reaction]++
        }
    
    }
    }
})


export const { postsAdded, reactionAdd } = postsSlice.actions
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer