import { useSettings } from "../context/SettingsContext";
import "./Settings.css";

const PRIORITIES = ["Low", "Medium", "High"];
const APP_KEYS = ["todo-tasks", "todo-categories", "todo-settings"];

export default function Settings() {
  const { settings, updateSetting, toggleTheme } = useSettings();

  const handleClearAll = () => {
    const ok = window.confirm(
      "Delete ALL tasks, categories and settings? This cannot be undone."
    );
    if (!ok) return;
    APP_KEYS.forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  };

  return (
    <div className="page settings">
      <h1>Settings</h1>

      <section className="card">
        <h2>Profile</h2>
        <label className="field">
          <span>Your name</span>
          <input
            type="text"
            placeholder="e.g. Sovisal"
            value={settings.userName}
            onChange={(e) => updateSetting("userName", e.target.value)}
          />
        </label>
      </section>

      <section className="card">
        <h2>Appearance</h2>
        <div className="field row">
          <span>Dark mode</span>
          <button
            type="button"
            className={`switch ${settings.theme === "dark" ? "on" : ""}`}
            role="switch"
            aria-checked={settings.theme === "dark"}
            onClick={toggleTheme}
          >
            <span className="knob" />
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Tasks</h2>
        <label className="field">
          <span>Default priority for new tasks</span>
          <select
            value={settings.defaultPriority}
            onChange={(e) => updateSetting("defaultPriority", e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="card danger-zone">
        <h2>Danger zone</h2>
        <p>Remove every task, category and setting saved in this browser.</p>
        <button type="button" className="btn btn-danger" onClick={handleClearAll}>
          Clear all data
        </button>
      </section>
    </div>
  );
}
