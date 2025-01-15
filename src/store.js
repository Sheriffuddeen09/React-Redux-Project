import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/TaskSlice";
import authReducer from './features/tasks/AuthSlice';
const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add your tasks reducer here
    auth: authReducer,
  },
});

export default store;
