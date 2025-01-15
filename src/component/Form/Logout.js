// src/components/LogoutButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/tasks/AuthSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button className='hover:text-white hover:bg-green-600 text-white bg-blue-600 p-1 text-sm rounded-lg' onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
