/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // './node_modules/tw-elements/dist/js/**/*.js', 
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary": 'Inter',
        "header": 'Outfit',
      },
      colors:{
        lightBlue: "#F5F7FB", 
        strongBlue: "#0058DB",
        headerBlue: "#003889",
        dark: "#2A2A2A"
      }
    },
  },
  plugins: [],
}
