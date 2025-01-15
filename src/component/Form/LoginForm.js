// src/components/LoginForm.js
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/tasks/AuthSlice';
import { Link } from 'react-router-dom';
import NotificationPopup from '../NotificationForm';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const userRef = useRef()

  const [firstLogin, setFirstLogin] = useState(false);

  useEffect(() => {
    // Check if this is the user's first time logging in
    const isFirstLogin = localStorage.getItem('firstLogin') === null;

    if (isFirstLogin) {
      // Set to false to prevent showing on subsequent logins
      localStorage.setItem('firstLogin', 'false');
      setFirstLogin(true);
    }
  }, []);
  const handleCancel = () => {
    setFirstLogin(false); // Hide the popup
  };
  useEffect(() => {
    userRef.current.focus()

}, [])
  const handleLogin = (e) => {
    e.preventDefault();
  
    setLoading(true)

    try{
    // Validate email and password (optional, you can implement custom validation here)
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    const userData = { email, password };
  
    // Simulate user login using Redux
    dispatch(login(userData));
  
    // Handle rememberMe logic
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("isLogged", "true");
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem("isLogged", "true");
    }
  }
    catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    } finally {
      setLoading(false); // Stop loading after processing
    }
  };
  

  return (
    
      <div className='flex  flex-column justify-center mx-auto lg:translate-y-7 translate-y-7 md:translate-y-48   rounded-xl border border-green-500 items-center bg-white lg:w-5/12 md:w-8/12 items-center p-10 w-72'>
            <div className="">
            
            <form onSubmit={handleLogin} >
                <div className="sm:mb-5">
                  <h1 className='text-black sm:text-5xl font-bold text-xl -mt-5 mb-10'>Welcome To <br /> QuadB Tech</h1>
                    <p className="text-sm text-black my-3"> 
                    Kindly enter your details to have access to your Dashboard</p>
                <div className="">
                    <p className="text-sm sm:text-xl -mb-2 text-black font-Cambria">
                        Email Address:
                    </p>
                    <br />
                    <input 
                    className="border-2 text-black border-green-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                    type="text"
                    required
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   // {...attribUser}
                    ref={userRef}
                    autoComplete="off"
                    />
                </div>
                    <div className="">
                    <p className="text-sm sm:text-xl -mb-2 mt-4 text-black ">
                        password:
                    </p>
                    <br />
                    <input 
                     className="border-2 relative text-black border-green-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                     type={showPassword ? 'text' : 'password'}
                    required
                    id="password"
                    checked={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                    style={{ cursor: "pointer", transform: "-50" }}
                    onClick={() => setShowPassword(!showPassword)}
                    >
                    </span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                <div className="inline-flex gap-1">
                <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe" className='text-black'>Remember Me</label>
                </div>
                <p className="text-sm text-center text-green-500">Forgot Password?</p>
                </div>
                <button type="submit"  className="my-5 w-64 bg-green-500 text-white sm:w-96 p-2 rounded-lg outline-none"
                     disabled={!email || !password || loading}>
                {loading ? "Sign in....." : "Sign in"}
                </button>
            </form>
            {firstLogin && <NotificationPopup onCancel={handleCancel} />}
            <p className="text-sm"> Don’t have an account?
                <span>
                    <Link to="/register" className="text-green-500 text-sm"> Create account</Link>
                </span>
            </p>
    </div>
    </div>
  );
};

export default LoginForm;
