import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3500' }),
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
    baseURL:'http://localhost:3500/'
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
