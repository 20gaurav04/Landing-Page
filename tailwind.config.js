/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        burbank: ['Burbank', 'sans-serif'],
        serif: ['Unisans', 'sans-serif'],
        sans: ['Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://as1.ftcdn.net/v2/jpg/05/88/20/62/1000_F_588206210_h56OKzIpa0bC7ItI54JoGvQkKb4HtsET.jpg')",

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
