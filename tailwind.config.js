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
    extend: {
      backgroundImage: {
        'bg-img': "url('https://i.ibb.co/1ngVR61/bg.jpg')",
        'home-bg': "url('https://i.ibb.co/4Nn0mrD/home-bg.jpg')",
      }
    },
  },
  plugins: [],
}