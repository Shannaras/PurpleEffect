/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'purple-background': "url('src\\assets\\bg_purple.jpg')",
      }
    },
  },
  plugins: [],
} 

