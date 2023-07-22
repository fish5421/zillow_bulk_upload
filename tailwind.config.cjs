/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: {
          50: "rgb(21,21,21)",
        },
        gray: {
          50: "rgb(48,48,48)",
        },
      },
    },
    fontFamily: {
      // sans: [your_main_font],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
