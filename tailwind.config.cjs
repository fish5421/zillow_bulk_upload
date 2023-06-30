/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {},
    fontFamily: {
      // sans: [your_main_font],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
