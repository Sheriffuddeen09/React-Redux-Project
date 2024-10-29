import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: () => ({})
})

export const {
    useGetTodosQuery,
    useAddTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation
} = apiSlice