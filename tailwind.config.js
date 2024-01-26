/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        primary: {
          10: "#FFFFFF", 
          20: "#C2B9FF", 
          30: "#909090",
          40: "#404040",
          50: "#000000",
        },
        secondary: {
          10: "#CEEC6D",
          20: "#47CCB7",
          30: "#2694B5",
          40: "#F08080",
          50: "#D3EF7A",
        }            
      }
    },
  },
  plugins: [],
}
