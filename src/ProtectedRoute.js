import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "./component/Form/LoginForm";
import Sidebar from "./component/layout/Sidebar";
import SidebarHide from "./component/layout/Sidebarhide";
import Header from "./component/layout/Header";
import TaskList from "./component/main_task/TaskList";
import NotificationPopup from "./component/main_task/NotificationForm";

const ProtectedRoute = ({
  handleSide,
  theme,
  sidebar,
  sidebarhide,
  toggleTheme,
  handleSidebarhide,
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [showPopup, setShowPopup] = useState(false);
  const [sidebaradd, setSidebarAdd] = useState(false);
  const [sidebaradder, setSidebarAdder] = useState(false);
  const [layoutMode, setLayoutMode] = useState("flex");

  const toggleLayoutMode = () => {
    setLayoutMode((prevMode) => (prevMode === "flex" ? "grid" : "flex"));
  };

  const handleSideAdd = () => {
    setSidebarAdd(!sidebaradd);
  };

  const handleSideAdder = () => {
    setSidebarAdder(!sidebaradder);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowPopup(true); // Show the popup after login
    }
  }, [isAuthenticated]);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  // If the user is not authenticated, render the LoginForm
  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div
      className={`flex lg:flex-row flex-col min-h-screen text-black bg-gray-50 app ${theme}`}
    >
      {/* Sidebar for larger screens */}
      <div className={`lg:block hidden`}>
        <Sidebar theme={theme} handleSide={handleSide} sidebar={sidebar} />
      </div>

      {/* Sidebar for smaller screens */}
      <div className={`block lg:hidden`}>
        <SidebarHide
          handleSidebarhide={handleSidebarhide}
          theme={theme}
          sidebarhide={sidebarhide}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full lg:w-0 min-w-0 p-6">
        <Header
          toggleLayoutMode={toggleLayoutMode}
          layoutMode={layoutMode}
          theme={theme}
          handleSide={handleSide}
          sidebarhide={sidebarhide}
          handleSidebarhide={handleSidebarhide}
          sidebar={sidebar}
          toggleTheme={toggleTheme}
        />
        <TaskList
          theme={theme}
          layoutMode={layoutMode}
          setLayoutMode={setLayoutMode}
          sidebaradd={sidebaradd}
          sidebaradder={sidebaradder}
          handleSideAdd={handleSideAdd}
          handleSideAdder={handleSideAdder}
        />
      </div>

      {/* Show the Notification Popup if the user has just logged in */}
      {showPopup && <NotificationPopup onCancel={handleClosePopup} />}
    </div>
  );
};

export default ProtectedRoute;
