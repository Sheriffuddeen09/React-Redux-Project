import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl:'https://redux-json.onrender.com' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/posts',
            providesTags:['Posts']
        })
    })
})

export const {
    useGetTodosQuery,
} = apiSlice

const Api = axios.create({
    baseURL:'https://redux-json.onrender.com'
})

export const getMessage = async () =>{
    const res = await Api.get('/users')
    return res.data
}