/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{ejs,jsx,ts,tsx}',
    './src/**/*.{jsx,ts,tsx}',      
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B7423",
        white: "#FFFFFF",
        dark: "#161622",
        secondary: "#FF9C01",
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      }
    },
  },
  plugins: [],

}

