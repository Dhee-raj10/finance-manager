import React from "react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>Personal Finance Dashboard</h1>
      <button
        className="btn btn-outline-primary"
        onClick={toggleTheme}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
