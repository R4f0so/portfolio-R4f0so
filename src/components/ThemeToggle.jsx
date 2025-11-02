import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      // If no stored preference, default to dark mode
      return "dark";
    }
    return "dark";
  });

  // Apply theme on mount
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Only remove/add dark class - no need for light class
    // Default (no class) means light mode
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);



  // Toggle between light/dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:opacity-80 text-2xl transition-all duration-300 absolute top-6 right-6 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}


