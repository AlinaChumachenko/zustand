import { create } from "zustand";
// import React, { useState } from "react";

const useInputStore = create((set) => ({
  title: "",
  setTitle: (newTitle) => set({ title: newTitle }),
}));

function Input() {
  //   const [title, setTitle] = useState("");
  const { title, setTitle } = useInputStore();

  function handleChangeTitle(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={title}
        onChange={handleChangeTitle}
      />
      <p className="mb-4 text-blue-500"> title: {title}</p>
    </div>
  );
}

export default Input;
