/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Exo", "Rajdhani", "sans-serif"],
        logo: ["Foldit", "Rajdhani", "sans-serif"],
      },
      colors: {
        primary_black: "#1f1f1f",
        white: "white",
        topnav: "#262626",
      },
    },
  },
  plugins: [require("daisyui")],
};
