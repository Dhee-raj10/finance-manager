import React from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme(); // ✅ fixed

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1>Personal Finance Dashboard</h1>
      <button
        className="btn btn-outline-primary"
        onClick={toggleTheme} // ✅ use the correct toggle function
      >
        {darkMode ? "Light Mode" : "Dark Mode"} {/* ✅ use correct boolean */}
      </button>
    </div>
  );
}

export default Header;
