
import { createEntityAdapter} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

const userpostsAdapter = createEntityAdapter()

const initialState = userpostsAdapter.getInitialState()

export const userpostsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserposts: builder.query({
            query: () => '/userposts',
            transformResponse: responseData => {
                return userpostsAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Userpost', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Userpost', id }))
            ]
        }),
        deleteUserpost: builder.mutation({
            query: ({id}) =>({
            url:`/userposts/${id}`,
            method:'DELETE',
            body:{ id }
        }),
            invalidatesTags:(result, error, arg) =>[
                {type: 'Userpost', id: arg.id}
            ]
        }) ,
})
})


export const {
    useGetUserpostsQuery,
    useDeleteUserpostMutation
} = userpostsApiSlice