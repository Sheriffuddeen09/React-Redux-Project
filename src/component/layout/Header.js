import React, { useState } from "react";
import LogoutButton from "../Form/Logout";

function Header({
  theme,
  handleSide,
  sidebar,
  toggleTheme,
  sidebarhide,
  handleSidebarhide,
  toggleLayoutMode,
  layoutMode,
}) {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <header className="flex items-center justify-between mb-6 -mt-4">
      {/* Sidebar Toggle for Large Screens */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onClick={handleSide}
        className={`w-6 h-6 lg:block hidden cursor-pointer ${sidebar ? "hidde" : "blocks"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {/* Sidebar Toggle for Small Screens */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onClick={handleSidebarhide}
        className={`w-6 h-6 block lg:hidden ${sidebarhide ? "hidde" : "blocks"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className="flex items-center space-x-2">
        {/* Search Section */}
        <div className="flex items-center space-x-2">
          {isSearchExpanded && (
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded w-64 transition-all duration-300 ease-in-out"
            />
          )}
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-200 hover:text-black transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Layout Mode Toggle */}
        <button
          onClick={toggleLayoutMode}
          className="p-2 hover:text-black rounded-full hover:bg-gray-300 dark:hover:bg-gray-300 transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            {layoutMode === "flex" ? (
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              
            )}
          </svg>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:text-black hover:bg-gray-300 dark:hover:bg-gray-300 transition duration-200"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5m6.364-.86l-1.06 1.06M21 12h-1.5m-.86 6.364l-1.06-1.06M12 21v-1.5m-6.364.86l1.06-1.06M3 12h1.5m.86-6.364L6.5 6.696M16.95 7.05a5.975 5.975 0 0 1 0 8.486 5.975 5.975 0 0 1-8.486 0 5.975 5.975 0 0 1 0-8.486 5.975 5.975 0 0 1 8.486 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>

        {/* Logout Button */}
        <LogoutButton />
      </div>
    </header>
  );
}

export default Header;
