// Import React library for component creation
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../api/apitasks/AuthSlice';

const LogoutButton = () => {
  // Use useDispatch to get the dispatch function for triggering Redux actions
  const dispatch = useDispatch();

  // Function to handle logout when the button is clicked
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      className='hover:text-white hover:bg-green-600 text-white bg-blue-600 p-1 text-sm rounded-lg'
      onClick={handleLogout} // Trigger handleLogout function when the button is clicked
    >
      Logout
    </button>
  );
};

export default LogoutButton;
