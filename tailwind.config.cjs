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
        'primary-1': '#283618',
        'primary-2': '#606C38',
        'secondary-1': '#FEFAE0',
        'accent-1': '#BC6C25',
        'accent-2': '#DDA15E',
      },
    },
  },
  plugins: [],
}
