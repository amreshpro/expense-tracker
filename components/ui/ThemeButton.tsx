"use client"
import { IoMdSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import useThemeStore from "@/store/themeStore";

export default function ThemeButton() {
    const {isDarkMode, toggleThemeMode} = useThemeStore()
  return (
    <button
    onClick={() =>toggleThemeMode()}
    className="w-fit   flex justify-start items-center text-center text-3xl "
  >
    <p className="">
      {isDarkMode ? <IoMdSunny /> : <IoMoonSharp  />}
    </p>
  </button>
  )
}