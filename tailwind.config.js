/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgrey: "#aaa",
        custombordergrey: "#c0c0c0",
        customgreen: "#62BFAD",
      },
    },
  },
  plugins: [],
};
