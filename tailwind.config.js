/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: 'rgb(37,168,214)',
        second: 'rgb(10,132,176)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

