/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      current: "currentColor",
      primary: "#030203",
      secondary: "#ff2a70",
      grey: "#e0e0e0",
      white: "ffffff",
    },
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
