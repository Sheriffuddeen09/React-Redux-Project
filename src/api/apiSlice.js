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
//https://redux-json.onrender.com

export const {
    useGetTodosQuery,
} = apiSlice

const Api = axios.create({
    baseURL:'https://redux-json.onrender.com/'
})

export const getMessage = async () =>{
    const res = await Api.get(`/users`)
    return res.data
}


export const getReels = async () =>{
    const res = await Api.get(`/posts`)
    return res.data
}

export const getSingleReels = async () =>{
    const res = await Api.get(`/reels`)
    return res.data
}

//baseURL:'https://redux-json.onrender.com'
