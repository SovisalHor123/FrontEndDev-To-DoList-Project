
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './pages/Login'

import { Routes, Route } from "react-router-dom";
import Layout from './component/Layout/Layout';
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Task";
import EditTask from "./pages/EditTask";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/new" element={<EditTask />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;