import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
    }
    return "dark";
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      setIsAnimating(false);
    }, 150);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:opacity-80 text-2xl transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-black/10 dark:border-white/10"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating ? "rotate-180 scale-0" : "rotate-0 scale-100"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}


