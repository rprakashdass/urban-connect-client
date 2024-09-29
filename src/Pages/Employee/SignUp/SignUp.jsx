import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    username: '',
  });
  const { email, password, username } = inputValue;

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [loading, setLoading] = useState(false); // Add a loading state

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // Handle error notifications
  const handleError = (err) =>
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
    });

  // Handle success notifications
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Mocked API call function
  const mockSignupAPI = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful signup if the email is "test@test.com", else fail
        if (data.email) {
          resolve({
            success: true,
            message: 'Signup successful! Redirecting to login...',
          });
        } else {
          reject({
            success: false,
            message: 'Signup failed.',
          });
        }
      }, 2000); // Simulate a 2-second delay for the API response
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      handleError('Invalid email format');
      return;
    }

    // Password validation (e.g., minimum 6 characters)
    if (password.length < 6) {
      handleError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true); // Set loading to true while request is in progress

    try {
      // Simulate calling the API with the mocked function
      const { success, message } = await mockSignupAPI(inputValue);

      if (success) {
        setIsSignedUp(true); // Set success status
        handleSuccess(message);
        setTimeout(() => {
          navigate('/e/login'); // Redirect to login after signup
        }, 2000);
      }
    } catch (error) {
      handleError(error.message); // Handle simulated error message
    } finally {
      setLoading(false); // Reset loading state
    }

    setInputValue({
      email: '',
      password: '',
      username: '',
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-full mt-4 text-center text-sm text-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
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
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Signup'}
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
