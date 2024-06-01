/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'CU': [ "Cormorant Upright", "serif"],
      'OS': ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}