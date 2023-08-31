/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        AlfaSlabOne: ['Alfa Slab One', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}