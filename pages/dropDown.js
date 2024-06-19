// import React, { useState } from "react";
import { create } from "zustand";

const useDropDownStore = create((set) => ({
  value: "",
  setValue: (newValue) => set({ value: newValue }),
}));

function DropDown() {
  const texts = ["Манго", "Ківі", "Фейхоа", "Яблука українські"];
  const { value, setValue } = useDropDownStore();

  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  const options = texts.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <div className="mt-2 p-5">
      <select
        value={value}
        onChange={handleChangeValue}
        className="px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      >
        {options}
      </select>
      <p className="mt-2 text-blue-500">ВАШ ВИБІР: {value}</p>
    </div>
  );
}

export default DropDown;
