// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    email: null,  // Replacing user with email
    password: null,  // Added password to state
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;  // Store the email in state
      state.password = action.payload.password;  // Store the password in state
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;  // Reset email on logout
      state.password = null;  // Reset password on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
