
import { createEntityAdapter} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return usersAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'User', id: "LIST" },
                ...result.ids.map(id => ({ type: 'User', id }))
            ]
        }),
        deleteUser: builder.mutation({
            query: ({id}) =>({
            url:`/users/${id}`,
            method:'DELETE',
            body:{ id }
        }),
            invalidatesTags:(result, error, arg) =>[
                {type: 'User', id: arg.id}
            ]
        }) ,
})
})


export const {
    useGetUsersQuery,
    useDeleteUserMutation
} = usersApiSlice