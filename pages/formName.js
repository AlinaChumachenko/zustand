import React from "react";
import { create } from "zustand";

const useFormStore = create((set) => ({
  values: {},
  setValue: (name, value) =>
    set((state) => ({
      values: { ...state.values, [name]: value },
    })),
}));

function useFormInput(name, initialValue) {
  const { values, setValue } = useFormStore((state) => ({
    values: state.values,
    setValue: state.setValue,
  }));

  if (!(name in values)) {
    setValue(name, initialValue);
  }

  function handleChange(e) {
    setValue(name, e.target.value);
  }

  const inputProps = {
    value: values[name] || initialValue,
    onChange: handleChange,
  };

  return inputProps;
}
function Form() {
  const firstNameProps = useFormInput("firstName", "Mary");
  const lastNameProps = useFormInput("lastName", "Poppins");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Welcome
        </h1>
        <label className="block mb-2 text-sm font-medium text-gray-600">
          First name:
        </label>
        <input
          {...firstNameProps}
          className="w-full px-3 py-2 mb-4 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Last name:
        </label>
        <input
          {...lastNameProps}
          className="w-full px-3 py-2 mb-4 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <p className="text-lg font-semibold text-center text-gray-700">
          Good morning,{" "}
          <span className="text-blue-500">{firstNameProps.value}</span>{" "}
          <span className="text-purple-500">{lastNameProps.value}</span>.
        </p>
      </div>
    </div>
  );
}

export default Form;
