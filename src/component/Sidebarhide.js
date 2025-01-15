import React from "react";
import favicon from "./image/favicon.ico";
import imagepic from "./image/image.png";

const SidebarHide = ({theme, sidebarhide, handleSidebarhide}) => {

  const totalTasks = 11;
  const completedTasks = 8; // Adjust this value
  const pendingTasks = totalTasks - completedTasks;

  // Calculate percentage
  const completedPercentage = (completedTasks / totalTasks) * 100;
  const pendingPercentage = 100 - completedPercentage;

  const content = (
         <div className={`flex flex-col items my-6 rounded content  w-48 mx-auto p-2 ${theme}`}>
          {/* Title */}
          <div className="flex flex-row justify-between gap-20">
            <span>
            <h4 className=" text-start text-sm ">Today Tasks</h4>
            <p className="text-sm font-bold mt-2">{totalTasks}</p>
            </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>

          </div>
          <span className="block w-full h-0.5 my-5 bg-gray-100"></span>

            <div className="circle mx-auto"></div>
    
          {/* Legend */}
          <div className="flex justify-start items-start mt-4">
            <div className="flex items-center mr-4">
              <span className="block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              <span className="small">Pending</span>
            </div>
            <div className="flex items-center">
              <span className="block w-2 h-2 bg-black rounded-full mr-1"></span>
              <span className="small">Done</span>
            </div>
          </div>
        </div>
      );
    
  
  return (
    <aside  className={`w-64 bg-white shadow-md p-4 app ${theme} ${sidebarhide ? "block" : "hidden"} fixed top-0 left-0 z-50 max-h-screen overflow-y-auto`}>
      {/* Logo and Header */}
      <div className="inline-flex items-center gap-3 mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            onClick={handleSidebarhide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        <span className="inline-flex items-center gap-1">
          <img
            src={favicon}
            alt="Logo"
            className="w-5 h-5 rounded-full"
          />
          <p className="text-xl font-bold text-green-600">DoIt</p>
        </span>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src={imagepic}
          alt="Profile"
          className="w-24 h-24 -mb-16 z-10 rounded-full bg-black -mb-16"
        />
      </div>
      <div className={` flex flex-col justify-center app ${theme}`}>
      <h2 className="text-sm text-center font-bold mt-14 mb-4">Hey, ABCD</h2>

      {/* Navigation */}
      <nav className={`space-y-4 border border-white mx-auto content ${theme}  w-48 p-2 rounded`}>
  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 rounded"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
</svg>

    <span>All Tasks</span>
  </a>
  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 rounded"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

    <span>Today</span>
  </a>
  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 rounded"
  >
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

    <span>Important</span>
  </a>
  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 rounded"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

    <span>Planned</span>
  </a>
  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 rounded"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

    <span>Assigned to Me</span>
  </a>
</nav>

<div className={` w-48 flex border border-white p-2 items-center mx-auto mt-2 content ${theme} rounded`}>
<button
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-300 w-full rounded"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


    <span>Add List</span>
  </button>
</div>

      {/* Task Progress */}
      <div className="mt-0 border border-white mt-5 rounded">
        {content}
    </div>
</div>
</div>
    </aside>
  );
};

export default SidebarHide;
