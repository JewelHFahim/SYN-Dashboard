/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#181818",
        "light-white": "#8b969f",
        "tcolor": "#6c757d",
        "pColor": "#923eb9"
      }
    },
  },

  plugins: [],

}