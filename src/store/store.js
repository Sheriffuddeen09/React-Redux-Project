import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import usersReducer from "../feature/user/userSlice"
export const store = configureStore({
    reducer:{
       [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})