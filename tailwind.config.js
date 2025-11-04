/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        offwhite: "#E9E4DE",
        graphite: "#2C2C2C",
        rose: {
          DEFAULT: "#B88E8E",
          dark: "#B88E8E",
        },
      },
    },
  },
  plugins: [],
};