import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./api/apitasks/TaskSlice";
import authReducer from './api/apitasks/AuthSlice';
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add your tasks reducer here
    auth: authReducer,
  },
});

export default store;
