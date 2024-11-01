import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Posts'],
    //baseQuery: fetchBaseQuery({ baseUrl: 'https://redux-json.onrender.com' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://redux-json.onrender.com' }),
    endpoints: () => ({})
})

export const {
    useGetTodosQuery,
    useAddTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation
} = apiSlice

const Api = axios.create({
    baseURL:'https://redux-json.onrender.com'
})

export const getMessage = async () =>{
    const res = await Api.get('/users')
    return res.data
}