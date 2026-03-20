/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a1f44", // Deep Navy
          light: "#1e3a6a",
          dark: "#051024",
        },
        secondary: {
          DEFAULT: "#f97316", // Vibrant Orange
          light: "#fb923c",
          dark: "#ea580c",
        },
        dark: "#1e293b",
        light: "#f8fafc",
        gray: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
