// import React, { useState } from "react";
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  // const [count, setCount] = useState(0);

  const { count, increment, decrement } = useStore();

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl mb-4">Count: {count}</h2>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
