import { createSlice, nanoid, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = 'http://localhost:3500/posts';

const initialState = {
    posts:[],
    status:'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()  => {
        
            const response = await axios.get(POSTS_URL)
            return [...response.data]
            
    } )

    export const addPosts = createAsyncThunk('posts/addPosts', async (initialPost)  => {
        
        const response = await axios.post(POSTS_URL, initialPost)
        return response.data
        
} )

export const updatePosts = createAsyncThunk('posts/updatePosts', async (initialPost)  => {
    
    const {id} = initialPost
    try{
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
    return response.data}    
    
    catch(err){
        //return err.message
        return initialPost
    }
}
)
export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
    const { id } = initialPost;
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`)
        if (response?.status === 200) return initialPost;
        return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
        return err.message;
    }
})


 const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state, action){
            state.posts.push(action.payload)
        },
        prepare(title, content, userId, image){
            return{
                payload:{
                    title,
                    content,
                    image,
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
    reactionAdded(state, action){

        const {postId, reaction} = action.payload
        const icons = state.posts.find(post => post.id === postId)
        if(icons){
            icons.reactions[reaction]++
        }
    
    }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'

            let min = 1
            const loadposts = action.payload.map(post =>{
                post.date= sub(new Date(), {minute: min++} ).toISOString()
                post.reactions = {
                    love: 0,
                    like: 0,
                    smile: 0
                }
                return post;
            })
            state.posts = state.posts.concat(loadposts)
        })
        .addCase(fetchPosts.rejected, (state, action) =>{
            state.error = 'failed'
            state.error = action.error.message
        })
        .addCase(addPosts.fulfilled, (state, action) => {
            // Fix for API post IDs:
            // Creating sortedPosts & assigning the id 
            // would be not be needed if the fake API 
            // returned accurate new post IDs
            const sortedPosts = state.posts.sort((a, b) => {
                if (a.id > b.id) return 1
                if (a.id < b.id) return -1
                return 0
            })
            action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
            // End fix for fake API post IDs 

            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString();
            action.payload.reactions = {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0
            }
            state.posts.push(action.payload)
        })
        .addCase(updatePosts.fulfilled, (state, action) => {
            if(!action.payload?.id){
                console.log("failed to update edit post")
                console.log(action.payload)
                return
            }
                const {id} = action.payload
                action.payload.date = new Date().toISOString()
                const posts = state.posts.filter((post) => post.id !== id)
                state.posts = [...posts, action.payload]
            
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            if (!action.payload?.id) {
                console.log('Delete could not complete')
                console.log(action.payload)
                return;
            }
            const { id } = action.payload;
            const posts = state.posts.filter(post => post.id !== id);
            state.posts = posts;
        })
      
    }
})


export const { postAdded, reactionAdded } = postsSlice.actions

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export const selectUserPost = createSelector(
                [selectAllPosts, (state, userId) => userId], 
                (posts, userId) => posts.filter(post => post.userId === userId)
            )
export default postsSlice.reducer