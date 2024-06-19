// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const Navbar = ({ user, onLogout }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-blue-500 dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">My App</h1>
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${
            darkMode ? "bg-gray-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute left-1 w-4 h-4 flex items-center justify-center transition-transform duration-300 ${
              darkMode ? "translate-x-5" : ""
            }`}
          >
            {darkMode ? (
              <MoonIcon className="w-4 h-4 text-white" />
            ) : (
              <SunIcon className="w-4 h-4 text-yellow-500" />
            )}
          </span>
        </button>
        {user && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-10 h-10 rounded-full ml-4"
          />
        )}
        <button
          onClick={onLogout}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
