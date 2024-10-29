import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://redux-json.onrender.com' }),
    endpoints: () => ({})
})

export const {
    useGetTodosQuery,
    useAddTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation
} = apiSlice