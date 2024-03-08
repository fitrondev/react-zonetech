/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FF8A00",
        blueDark: "#2F327D",
        blueGray: "#696984",
        lightGray: "#CECECE",
        textBlack: "#222224",
      },
    },
  },
  plugins: [],
};
