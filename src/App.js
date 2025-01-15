import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useSelector } from 'react-redux';
import LogoutButton from "./component/Form/Logout";
import ProtectedRoute from "./ProtectedRoute";
import EditSide from "./component/Editside";
const App = () => {
  const [sidebarhide, setSidebarhide] = useState(false)
  const [sidebar, setSidebar] = useState(true)
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  const { isAuthenticated } = useSelector((state) => state.auth);
  // Apply the theme to the body element
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark"); // Apply dark class to body
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light"); // Apply light class to body
      document.body.classList.remove("dark");
    }
  }, [theme]); // Run this effect when `theme` changes

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSide = () =>{
    setSidebar(!sidebar)
  }
  const handleSidebarhide  = () =>{
    setSidebarhide(!sidebarhide)
  }
  return (

    <div className={`min-h-screen app ${theme}`} >{
      isAuthenticated ? (
     <ProtectedRoute handleSidebarhide={handleSidebarhide} handleSide={handleSide} theme={theme} sidebar={sidebar} sidebarhide={sidebarhide} toggleTheme={toggleTheme} />
      )
      : (
        <ProtectedRoute handleSidebarhide={handleSidebarhide} handleSide={handleSide} theme={theme} sidebar={sidebar} sidebarhide={sidebarhide} toggleTheme={toggleTheme} />
      )
    }
    </div>
  );
};

export default App;
