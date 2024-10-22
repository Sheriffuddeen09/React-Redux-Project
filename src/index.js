import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

import { fetchUsers } from './feature/users/userSlice';
import { fetchPosts } from './feature/posts/postSlice';
store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));

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

