/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,astro}"],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka'],
        'khula': ['Khula']
      },
      colors: {
        background: '#253237',
        text: '#E0FBFC',
        secondaryText: '#9DB4C0',
      },
    },
  },
  plugins: [],
}
