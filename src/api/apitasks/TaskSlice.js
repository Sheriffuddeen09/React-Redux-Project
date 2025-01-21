import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://redux-json.onrender.com/todos";

// Fetch tasks from the API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(API_URL);
  return response.data.map((task) => ({
    ...task,
    priority: task.priority || "No Priority",
    completed: task.completed || false,
  }));
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(), // Unique ID
        title: action.payload.title,
        priority: action.payload.priority,
        completed: false, // Default value
      };
      state.list.push(newTask); // Add to task list
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    // Add other reducers as needed (e.g., toggleTaskComplete)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
