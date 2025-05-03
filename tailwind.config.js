/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-green": "rgb(6, 122, 70)",
        "background-light-green": "rgb(210, 248, 149)",
        "button-light-green": "#f3ffe6",
        "light-gray": "#f8f8f8;",
        "food-1": "rgb(255, 207, 112)",
        "food-2": "rgb(71, 107, 45);",
        "food-3": "rgb(55, 147, 138);",
        "food-4": "rgb(255, 207, 112);",
        "fb-color": "rgb(24, 119, 242);",
        "x-color": "#242424;",
        "ig-color": "rgb(225, 48, 108);",
      },
      fontFamily:{
        "trebuchet": ['Trebuchet', 'sans-serif'],
        "agrandir":['Agrandir','sans-serif'],
      },
    },
  },
  plugins: [],
}