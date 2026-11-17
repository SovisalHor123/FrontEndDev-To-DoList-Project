import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Navbar />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}