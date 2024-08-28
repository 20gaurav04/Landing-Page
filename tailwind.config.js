/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure to include all relevant file extensions
    "./node_modules/flowbite-react/**/*.js" // Include Flowbite's content
  ],
  theme: {
    extend: { fontFamily: {
      burbank: ['Burbank', 'sans-serif'],
      sans: ['Arial', 'sans-serif'],},
  },
  plugins: [
    require('flowbite/plugin'), // This initializes the Flowbite plugin
  ],
}}
