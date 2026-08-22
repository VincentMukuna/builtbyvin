"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const getCurrentTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

const getServerTheme = (): Theme => "dark";

function subscribe(onThemeChange: () => void) {
  function syncThemeFromStorage(event: StorageEvent) {
    if (event.key !== "theme") return;
    if (event.newValue !== "light" && event.newValue !== "dark") return;

    document.documentElement.dataset.theme = event.newValue;
    onThemeChange();
  }

  window.addEventListener("themechange", onThemeChange);
  window.addEventListener("storage", syncThemeFromStorage);

  return () => {
    window.removeEventListener("themechange", onThemeChange);
    window.removeEventListener("storage", syncThemeFromStorage);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getCurrentTheme, getServerTheme);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";
  const label = `Use ${nextTheme} theme`;

  function toggleTheme() {
    const next = getCurrentTheme() === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // The visible theme can still change when storage is unavailable.
    }
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {nextTheme === "light" ? "☀" : "☾"}
      </span>
      <span>{nextTheme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
