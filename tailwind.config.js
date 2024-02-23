const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#083344",
          800: "#164E63",
          700: "#155E75",
          DEFAULT: "#0E7490",
          600: "#0891B2",
          500: "#06B6D4",
          400: "#22D3EE",
          300: "#67E8F9",
          200: "#A5F3FC",
          100: "#CFFAFE",
        },
        warn: {
          900: "#450A0A",
          800: "#7F1D1D",
          700: "#991B1B",
          DEFAULT: "#B91C1C",
          600: "#EF4444",
          500: "#F87171",
          400: "#FCA5A5",
          300: "#FECACA",
          200: "#FEE2E2",
          100: "#FEF2F2",
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
