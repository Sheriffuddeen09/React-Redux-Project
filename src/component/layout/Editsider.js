import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { deleteTask } from "../../api/apitasks/TaskSlice";
import { useDispatch } from "react-redux";


const EditSider = ({theme, sidebaradder, handleSideAdder, task}) => {

  const [isActive, setIsActive] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch()

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker); // Toggles the visibility of the date picker
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
    console.log("Selected Due Date:", date.getFullYear()); // Logging the selected date year
  };

  
  const toggleColor = () => {
    setIsActive(!isActive); // Toggles the visibility of the icon star
  };
   
  return (
    <aside className={`w-80 shadow-md p-4 edit overflow-hidden h-full mt-14 ${theme} fixed top-0 right-0 z-50 max-h-screen ${sidebaradder ? "block" : "hidden"} overflow-y-auto scrollbar-thumb-transparent  scrollbar-thin scrollbar-track-transparent `}>
      <div className="flex flex-col flex h-full p-2 items-center -mt-8 justify-between">
      {/* Navigation */}
      <nav className={`space-y-4 p-2 rounded overflow-hidden`}>
        <hr className="w-72 my-6" />
      <div className="flex items-center justify-between translate-x-2 -mt-2 -mb-3 -translate-y-4">
        <div className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={false}
              />
              <span className="text-lg ">Buy groceries</span>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={isActive ? "green" : "black"}
                className="w-4 h-4 cursor-pointer -translate-x-5"
                onClick={toggleColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            </div>
        <hr className="w-72 -translate-y-4" />
  <a
    href="#"
    className="flex items-center gap-2 p-2 -mt-3 mb-1 text-sm hover:bg-gray-400 rounded -translate-y-6"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


    <span>Add steps</span>
  </a>
  <hr className="w-72 -translate-y-8" />

  <a
    href="#"
    className="flex items-center gap-2 p-2 text-sm hover:bg-gray-400 rounded -translate-y-10"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>


    <span>Set Reminder</span>
  </a>
  <hr className="w-72 -translate-y-12" />

  <a href="#" onClick={() => setShowDatePicker(!showDatePicker)} className=" -translate-y-14 overflow-hidden flex items-center gap-2 p-2 text-sm hover:bg-gray-400 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span>Add Due Date</span>
          </a>

          {showDatePicker && (
            <div className="mt-2 relative overflow-hidden -translate-y-16">
              <DatePicker
                selected={dueDate}
                onChange={handleDueDateChange}
                inline
                dateFormat="yyyy/MM/dd"
                className="custom-datepicker" // Custom class for the date picker
              />
            </div>
          )}
    <hr className="w-72 -translate-y-16" />

  <a
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-gray-400 rounded -translate-y-20"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>


    <span>Repeat</span>
  </a>
  
</nav>

<div className={`flex w-full p-2 items-center mt-2 justify-between flex-row -translate-y-2`}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 cursor-pointer" onClick={handleSideAdder}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>

  <p className="" style={{ fontSize: "9px" }}>Created today</p>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 cursor-pointer" onClick={() => handleDeleteTask(task.id)}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
</div>


</div>
    </aside>
  );
};

export default EditSider;
