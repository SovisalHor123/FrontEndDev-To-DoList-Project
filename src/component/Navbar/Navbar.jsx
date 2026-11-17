import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/tasks/new">New Task</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}