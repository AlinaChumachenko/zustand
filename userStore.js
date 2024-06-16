import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    name: " ",
    email: " ",
    age: 0,
  },
  updateUser: (updatedUser) => set({ user: { ...updatedUser } }),
}));

export default useUserStore;
