/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f1ec60", // Color claro
          dark: "#1a1a16", // Color oscuro
        },
      },
    },
  },
  plugins: [],
};
