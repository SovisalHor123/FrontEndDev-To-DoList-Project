import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "todo-settings";

export const DEFAULT_SETTINGS = {
  theme: "light", // "light" | "dark"
  defaultPriority: "Medium", // "Low" | "Medium" | "High"
  userName: "",
};

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...DEFAULT_SETTINGS, ...(saved || {}) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings);

  // Save every change to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  // Apply the theme to the whole app (<html data-theme="dark">)
  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
  }, [settings.theme]);

  const updateSetting = (key, value) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  const toggleTheme = () =>
    updateSetting("theme", settings.theme === "dark" ? "light" : "dark");

  const resetSettings = () => setSettings(DEFAULT_SETTINGS);

  const value = { settings, updateSetting, toggleTheme, resetSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }
  return ctx;
}
