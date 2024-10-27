import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { extendedApiSlice } from './feature/posts/postsSlice';
import { Provider } from 'react-redux';
import { fetchUsers } from './feature/user/userSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate())

store.dispatch(fetchUsers())
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes><Route
      path='/*' element={<App />}
    ></Route></Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

