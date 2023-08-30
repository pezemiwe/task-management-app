import React from "react";
import Logo from "../assets/svgs/logo.svg";
import { BoardIcon } from "../assets/custom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import EyeSlash from "../assets/svgs/eye-slash.svg";

interface SideboxProps {
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const Sidebox: React.FC<SideboxProps> = ({ setTheme }) => {
  return (
    <div
      className={`w-72 bg-gray20 text-white h-screen border-r border-gray30 flex flex-col `}
    >
      <div className="flex-1">
        <div className="pl-4">
          <img src={Logo} alt="Logo" className="cursor-pointer pt-6 mb-12" />
          <p className="text-gray40 text-xs font-bold mb-4">ALL BOARDS (8)</p>
        </div>
        <div
          className={`flex items-center bg-purple h-12 px-4 cursor-pointer hover:bg-lightPurple w-64 rounded-r-full active:scale-95 mb-4`}
        >
          <BoardIcon currentColor="white" />
          <p className="text-white text-sm font-bold ml-4">
            Smart Save Mobile App
          </p>
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-center h-12 bg-gray10 mx-6 rounded mb-6">
        <MdDarkMode className="text-gray40 text-xl" />
        <input
          type="checkbox"
          className="toggle toggle-sm mx-4"
          onClick={() =>
            setTheme &&
            setTheme((theme: string) => (theme === "dark" ? "light" : "dark"))
          }
        />
        <MdLightMode className="text-gray40 text-xl" />
      </div>
      <div className="flex items-center mb-12 mx-6 cursor-pointer">
        <img src={EyeSlash} alt="Eye Slash" />
        <p className="text-gray40 text-sm font-bold ml-4">Hide Sidebar</p>
      </div>
    </div>
  );
};
