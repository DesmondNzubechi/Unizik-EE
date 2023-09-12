/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myfont': [ 'Nanum Myeongjo', 'serif'],
        'fonty': ['Poppins', 'sans-serif']
      },
     colors: {  
       "Tp": "rgba(0, 0, 0, 0.9)",
       'tpr'  : 'rgba(250, 250, 250, .8)',
      }
  },
  plugins: [],
}}