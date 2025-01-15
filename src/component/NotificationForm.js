import React, { useState, useEffect } from 'react';

const NotificationPopup = ({ onCancel }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex text-black justify-center items-center z-50 text-sm">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-semibold">Welcome Back!</h3>
        <p className="text-sm mt-2">This is your first time logging in. Enjoy your experience!</p>
        <p className='inline-flex gap-2'>* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
Enable minimizing of the sidebar when click

</p>
<p className='inline-flex gap-2'>* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

Enable Popup for Add Due Date sidebar when click

</p>
<p className='inline-flex gap-2'>* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

Enable the grid and flex to display when click

</p>
<p className='inline-flex gap-2'>* 
the sun and moon Enable the light and dark mode when click

</p>
<p className='inline-flex gap-2'>* 
the search is expand when click

</p>
        <div className="mt-4 flex justify-end">
          <button 
            className="bg-red-500 text-white py-1 px-4 rounded-md" 
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
