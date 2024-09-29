import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, handleSubmit, handleOnChange, inputValue, buttonText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    setUsername(inputValue.email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {isLoggedIn && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce duration-100">
          <span>{username} logged in successfully!</span>
          <button
            className="ml-4 text-white font-bold"
            onClick={() => setIsLoggedIn(false)}
          >
            X
          </button>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-full mt-4 text-center text-sm text-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <br />
        <form onSubmit={handleLogin}>
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
              value={inputValue.email}
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
              value={inputValue.password}
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
              {buttonText}
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/e/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;