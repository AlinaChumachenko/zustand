import { useEffect } from "react";
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  setCount: () => set((newCount) => ({ count: newCount.count + 1 })),
}));

function useCounter() {
  const { count, setCount } = useCounterStore();

  useEffect(() => {
    const id = setInterval(() => {
      setCount();
    }, 1000);

    return () => clearInterval(id);
  }, [setCount]);

  return count;
}

export default function Counter() {
  const count = useCounter();

  return (
    <h1 className="text-5xl text-center mt-8 font-bold text-purple-800">
      Seconds passed: {count}
    </h1>
  );
}
