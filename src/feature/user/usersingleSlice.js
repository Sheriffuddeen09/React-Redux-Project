
import { createEntityAdapter} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

const singlesAdapter = createEntityAdapter()

const initialState = singlesAdapter.getInitialState()

export const singlesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSingles: builder.query({
            query: () => '/singles',
            transformResponse: responseData => {
                return singlesAdapter.setAll(initialState, responseData)
            },
            providesTags: (result, error, arg) => [
                { type: 'Single', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Single', id }))
            ]
        }),
        deleteSingle: builder.mutation({
            query: ({id}) =>({
            url:`/singles/${id}`,
            method:'DELETE',
            body:{ id }
        }),
            invalidatesTags:(result, error, arg) =>[
                {type: 'Single', id: arg.id}
            ]
        }) ,
})
})


export const {
    useGetSinglesQuery,
    useDeleteSingleMutation
} = singlesApiSlice