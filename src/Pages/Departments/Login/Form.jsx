// Form.jsx
import React from 'react';

const Form = ({ inputValue, handleOnChange, handleSubmit, loading, departments }) => {
  const { email, password, department } = inputValue;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          User ID
        </label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your User ID"
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
      <div className="mb-6">
        <label
          htmlFor="department"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Department
        </label>
        <select
          name="department"
          value={department}
          onChange={handleOnChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dep, index) => (
            <option key={index} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <button
          type="submit"
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default Form;
