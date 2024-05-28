"use client"
import { create } from "zustand";

type State = {
  isDarkMode: boolean;
};

type Actions = {
  changeThemeMode: (theme: boolean) => void;
  toggleThemeMode: () => void;
};

const useThemeStore = create<State & Actions>((set) => ({
  isDarkMode: false,
  changeThemeMode: (theme: boolean) => set(() => ({ isDarkMode: theme })),
  toggleThemeMode:()=>set((state)=>({isDarkMode:!state.isDarkMode}))
}));

export default useThemeStore;
