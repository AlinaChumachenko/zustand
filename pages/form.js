// import { useState } from "react";
import { create } from "zustand";

const useNameStore = create((set) => ({
  firstName: "Mary",
  lastName: "Poppins",
  setFirstName: (newFirstName) => set({ firstName: newFirstName }),
  setLastName: (newLastName) => set({ lastName: newLastName }),
}));

export default function Form() {
  //   const [firstName, setFirstName] = useState("Mary");
  //   const [lastName, setLastName] = useState("Poppins");

  const { firstName, lastName, setFirstName, setLastName } = useNameStore();

  function handleFirstNameChange(e) {
    const value = e.target.value;
    setFirstName(value);
    // console.log(value);
  }

  function handleLastNameChange(e) {
    const value = e.target.value;
    setLastName(value);
    // console.log(value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Welcome
        </h1>
        <label className="block mb-2 text-sm font-medium text-gray-600">
          First name:
          <input
            value={firstName}
            onChange={handleFirstNameChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Last name:
          <input
            value={lastName}
            onChange={handleLastNameChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>
        <p className="mt-4 text-lg font-semibold text-center text-gray-700">
          Good morning, <span className="text-blue-500">{firstName}</span>{" "}
          <span className="text-purple-500">{lastName}</span>.
        </p>
      </div>
    </div>
  );
}
