import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLightDarkTheme } from "../../contexts/LightDarkThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { ldTheme } = useLightDarkTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
      <Link to="/">
        <img
          src={
            ldTheme === "dark"
              ? "/assets/logoLight.svg"
              : "/assets/logoDark.svg"
          }
          alt="logo"
          className="w-8 h-8 object-center rounded-2xl"
        />
      </Link>

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes
            className={ldTheme === "dark" ? "text-slate-400" : "text-gray-700"}
          />
        ) : (
          <FaBars
            className={ldTheme === "dark" ? "text-slate-400" : "text-gray-700"}
          />
        )}
      </button>

      <div
        className={`flex space-x-8 items-center ${
          isMenuOpen
            ? "flex-col absolute top-full left-0 w-full bg-opacity-90 backdrop-blur-md py-4 md:static md:flex-row transition-all duration-300"
            : "hidden md:flex"
        } ${ldTheme === "dark" ? "bg-zinc-900" : "bg-white"}`}
      >
        <Link
          to="#"
          className={`font-semibold text-lg py-2 px-4 ${
            ldTheme === "dark" ? "text-slate-400" : "text-gray-700"
          }`}
        >
          Blog
        </Link>
        <Link
          to="#skills-section"
          className={`font-semibold text-lg py-2 px-4 ${
            ldTheme === "dark" ? "text-slate-400" : "text-gray-700"
          }`}
        >
          Skills
        </Link>
        <Link
          to="#projects-section"
          className={`font-semibold text-lg py-2 px-4 ${
            ldTheme === "dark" ? "text-slate-400" : "text-gray-700"
          }`}
        >
          Projects
        </Link>
        <Link
          to="#"
          className={`px-4 py-2 text-lg rounded-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-800 transform hover:scale-105 ${
            ldTheme === "dark"
              ? "bg-slate-200 border-2 border-slate-300 text-zinc-900 hover:bg-slate-100 hover:border-slate-200"
              : "bg-white border-2 border-violet-600 text-violet-600 hover:bg-violet-900 hover:text-white"
          }`}
        >
          Hire me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
