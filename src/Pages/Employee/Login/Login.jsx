import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      handleError("Invalid email address.");
      return;
    }

    // If email is valid, log in with any username
    handleSuccess("Login successful!");
    setIsLoggedIn(true);
    setUsername(email.split("@")[0]);  // Use part of email as the username

    setTimeout(() => {
      navigate("/"); // Redirect to employee dashboard
    }, 1000);
  };

  return (
  <div className="relative items-center justify-center h-screen bg-gray-100">
   <div className="absolute bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-full mt-4 text-center text-sm text-gray-600">
    <h2 className="text-3xl font-bold mb-6 text-center">Employee Login</h2>
    <br />
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2 "
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleOnChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Login
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/e/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
    <ToastContainer />
  </div>
</div>
  );
};

export default EmployeeLogin;
