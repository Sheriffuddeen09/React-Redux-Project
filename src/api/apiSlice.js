import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes:['Todos'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags:['Todos']
        }),
        addTodos: builder.mutation({
            query: (todo) =>({
                url: '/todos',
                method: "POST",
                body: todo
            }),
            invalidatesTags:['Todos']
            
        }),
            updateTodos: builder.mutation({
                query: (todo) =>({
                    url: `${'/todos'}/${todo.id}`,
                    method: "PATCH",
                    body: todo
                    
            }),
            invalidatesTags:['Todos']
        }),
        deleteTodos: builder.mutation({
            query: ({id}) =>({
                url: `${'/todos'}/${id}`,
                method: "DELETE",
                body: id
                
        }),
        invalidatesTags:['Todos']
    })
    })
})

export const {
    useGetTodosQuery,
    useAddTodosMutation,
    useDeleteTodosMutation,
    useUpdateTodosMutation
} = apiSlice