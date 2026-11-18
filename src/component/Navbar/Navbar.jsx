import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { settings, toggleTheme } = useSettings();
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <span className="brand">To-Do List</span>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={close}>Dashboard</NavLink>
        <NavLink to="/tasks" end onClick={close}>Tasks</NavLink>
        <NavLink to="/tasks/new" onClick={close}>New Task</NavLink>
        <NavLink to="/calendar" onClick={close}>Calendar</NavLink>
        <NavLink to="/settings" onClick={close}>Settings</NavLink>

        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {settings.theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
        </button>
      </div>
    </nav>
  );
}
