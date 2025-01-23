import { createEntityAdapter } from "@reduxjs/toolkit";

import {sub} from 'date-fns'
import { apiSlice } from "../../api/apiSlice";


const postsAdapter = createEntityAdapter({
    sortComparer: (a,b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: (responseData) => {
                let min = 1;
                const loadedPosts = responseData.map((post) => {
                  if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                  
                  // Ensure that image and other fields are included without modification
                  const transformedPost = {
                    ...post,
                    reactions: post.reactions || { love: 0, like: 0, smile: 0 },
                  };
              
                  console.log('Transformed Post:', transformedPost); // Log each post to check
                  return transformedPost;
                });
              
                return postsAdapter.setAll(initialState, loadedPosts);
              },              
            providesTags: (result, error, arg) => result ? [
                {type: 'Post', id: "LIST"},
                ...result.ids.map(id => ({type:'Post', id}))
            ] : [{ type: 'Post', id: 'LIST' }],
        }),
        getPostsByUserId: builder.query({
            query: id => `/posts/?userId=${id}`,
            transformResponse: responseData =>{
                let min = 1
                const loadedPosts = responseData.map(post =>{
                    if (!post?.date) post.date = sub(new Date(), {minute: min++}).toISOString()
                        if(!post?.reaction) post.reactions = {
                            love: 0,
                            like: 0,
                            smile: 0,
                        } 
                        return post
                })
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result, error, arg) =>{
                console.log(result)
                return [
                ...result.ids.map(id => ({type:'Post', id}))]
            }
        }),
        addPosts: builder.mutation({
            query: initialPost =>({
                url:'/posts',
                method: 'POST',
                body:{
                    ...initialPost,
                    userId: Number(initialPost.userId),
                    reactions:{
                        love: 0,
                        like:0,
                        smile:0
                    }
                }
            }),
            invalidatesTags:[{type:'Post', id:"LIST"}]
        }),
        updatePost: builder.mutation({
            query: initialPost =>({
            url:`/posts/${initialPost.id}`,
            method:'PUT',
            body:{
                ...initialPost,
                date: new Date().toISOString()
            },
            invalidatesTags:(result, error, arg) =>[
                {type: 'Post', id: arg.id}
            ]
        })
    })
        ,
        deletePost: builder.mutation({
            query: ({id}) =>({
            url:`/posts/${id}`,
            method:'DELETE',
            body:{ id }
        }),
            invalidatesTags:(result, error, arg) =>[
                {type: 'Post', id: arg.id}
            ]
        }) ,
        addReaction: builder.mutation({
            query: ({postId, reactions}) =>({
            url:`posts/${postId}`,
            method:'PATCH',
            body:{ reactions }
        }),
        async onQueryStarted({postId, reactions}, {dispatch, queryFulfilled}){

            const patchResult = dispatch(
                extendedApiSlice.util.updateQueryData('getPosts', 'getPosts', draft =>{
                    const post = draft.entities[postId]
                    if (post) post.reactions = reactions
                })
            )
            try{
                await queryFulfilled
            }
            catch{
                patchResult.undo()
            }
        }
        })
    })
})

export const{
    useGetPostsQuery,
    useGetPostsByUserIdQuery,
    useAddPostsMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useAddReactionMutation
} = extendedApiSlice


