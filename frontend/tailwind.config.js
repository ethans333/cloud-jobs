/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "money-bg": "url('./assets/MoneyBGCyan.jpeg')",
        "hero-bg": "url('./assets/homebg.png')",
        "circle-bg": "url('./assets/circle_image.png')",
      },
    },
  },
  plugins: [],
};
