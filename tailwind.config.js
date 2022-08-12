/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/bg.png')",
        "hero2-bg": "url('../public/hero2.jpg')",
        "hero3-bg": "url('../public/hero3.jpg')",
      },
    },
  },
  plugins: [],
};
