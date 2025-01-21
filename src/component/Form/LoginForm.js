// Import React and hooks for managing state and side effects
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../api/apitasks/AuthSlice';
import { Link } from 'react-router-dom';
import NotificationPopup from '../main_task/NotificationForm';

const LoginForm = () => {
  const [email, setEmail] = useState(''); // Stores the user's email
  const [password, setPassword] = useState(''); // Stores the user's password
  const [showPassword, setShowPassword] = useState(false); // Toggles password visibility
  const [rememberMe, setRememberMe] = useState(false); // Tracks the "Remember Me" checkbox
  const [loading, setLoading] = useState(false); // Indicates loading state during login
  const [firstLogin, setFirstLogin] = useState(false); // Indicates if this is the user's first login

  const dispatch = useDispatch(); // Redux dispatch for triggering actions
  const userRef = useRef(); // Reference to the email input field

  // Effect to handle first login by checking localStorage
  useEffect(() => {
    const isFirstLogin = localStorage.getItem('firstLogin') === null;

    if (isFirstLogin) {
      localStorage.setItem('firstLogin', 'false'); // Update localStorage for future logins
      setFirstLogin(true); // Display the notification popup
    }
  }, []);

  // Function to hide the notification popup
  const handleCancel = () => {
    setFirstLogin(false);
  };

  // Focus on the email input field when the component mounts
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Function to handle the login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form default behavior (page reload)

    setLoading(true); // Show loading indicator

    try {
      // Validate that both email and password fields are filled
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      // Prepare user data for login
      const userData = { email, password };

      // Dispatch login action to Redux store
      dispatch(login(userData));

      // Handle "Remember Me" logic for localStorage or sessionStorage
      if (rememberMe) {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLogged', 'true');
      } else {
        sessionStorage.setItem('user', JSON.stringify(userData));
        sessionStorage.setItem('isLogged', 'true');
      }
    } catch (error) {
      // Catch and log any errors during login
      console.error('Login error:', error);
      alert('An error occurred during login.');
    } finally {
      setLoading(false); // Hide loading indicator after processing
    }
  };

  return (
    <div className="flex flex-column justify-center mx-auto lg:translate-y-7 translate-y-7 md:translate-y-48 rounded-xl border border-green-500 items-center bg-white lg:w-5/12 md:w-8/12 items-center p-10 w-72">
      <div>
        <form onSubmit={handleLogin}>
          <div className="sm:mb-5">
            {/* Title and Instructions */}
            <h1 className="text-black sm:text-5xl font-bold text-xl -mt-5 mb-10">
              Welcome To <br /> QuadB Tech
            </h1>
            <p className="text-sm text-black my-3">
              Kindly enter your details to have access to your Dashboard
            </p>

            {/* Email Input */}
            <div>
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
                ref={userRef}
                autoComplete="off"
              />
            </div>

            {/* Password Input */}
            <div>
              <p className="text-sm sm:text-xl -mb-2 mt-4 text-black">
                Password:
              </p>
              <br />
              <input
                className="border-2 relative text-black border-green-200 w-64 sm:w-96 p-2 rounded-lg outline-none"
                type={showPassword ? 'text' : 'password'}
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                style={{ cursor: 'pointer', transform: '-50' }}
                onClick={() => setShowPassword(!showPassword)}
              ></span>
            </div>
          </div>

          {/* Remember Me and Forgot Password Section */}
          <div className="flex flex-row justify-between items-center">
            <div className="inline-flex gap-1">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-black">
                Remember Me
              </label>
            </div>
            <p className="text-sm text-center text-green-500">Forgot Password?</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="my-5 w-64 bg-green-500 text-white sm:w-96 p-2 rounded-lg outline-none"
            disabled={!email || !password || loading}
          >
            {loading ? 'Sign in.....' : 'Sign in'}
          </button>
        </form>

        {/* Notification Popup */}
        {firstLogin && <NotificationPopup onCancel={handleCancel} />}

        {/* Registration Link */}
        <p className="text-sm">
          Don’t have an account?
          <span>
            <Link to="/register" className="text-green-500 text-sm">
              {' '}
              Create account
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
