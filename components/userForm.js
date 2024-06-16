import React, { useState } from "react";
import useUserStore from "../userStore.js";

export default function UserPage() {
  const { user, updateUser } = useUserStore();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    age: user.age,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">User Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </label>
        </div>
        <div>
          <label className="block mb-1">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </label>
        </div>
        <div>
          <label className="block mb-1">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400"
        >
          Update
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Current User:</h2>
        <p className="mb-1">Name: {user.name}</p>
        <p className="mb-1">Email: {user.email}</p>
        <p className="mb-1">Age: {user.age}</p>
      </div>
    </div>
  );
}
