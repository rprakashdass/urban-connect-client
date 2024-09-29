// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles
import Form from './Form'; // Import the form component

const DepartmentLogin = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    department: '',
  });

  const [loading, setLoading] = useState(false); // Add a loading state

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
    });

  // Mocked API for login
  const mockLoginAPI = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful login if the department, else reject
        if (data.department && data.email) {
          resolve({
            success: true,
            message: 'Login successful! Redirecting...',
          });
        } else {
          reject({
            success: false,
            message: 'Login failed. Incorrect credentials or department.',
          });
        }
      }, 2000); // Simulate a 2-second delay for the API response
    });
  };

  // Handle form submission
  // Login.jsx

// Modify the handleSubmit function to navigate to the home page
const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true); // Set loading to true while request is in progress

  try {
    const { success, message } = await mockLoginAPI(inputValue); // Use mock API

    if (success) {
      handleSuccess(message);
      setTimeout(() => {
        navigate('/d/Home'); // Redirect to the home page after successful login
      }, 1000); // Wait for a second before redirecting
    } else {
      handleError(message);
    }
  } catch (error) {
    handleError(error.message); // Handle mock API error
  } finally {
    setLoading(false); // Reset loading state
  }

  setInputValue({
    email: '',
    password: '',
    department: '',
  });
};

  const departments = [
    'Road & highways',
    'Civil',
    'Transport',
    'Water pipelines',
    'Telecommunications',
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-full mt-4 text-center text-sm text-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Department Login</h2>
        <br />
        <Form
          inputValue={inputValue}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          loading={loading}
          departments={departments}
        />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/d/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DepartmentLogin;
