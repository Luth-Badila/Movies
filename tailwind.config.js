/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/bg.png')",
        "hero2-bg": "url('../public/hero2.jpg')",
        "hero3-bg": "url('../public/hero3.jpg')",
        "hero4-bg": "url('../public/hero4.avif')",
        "hero5-bg": "url('../public/hero5.avif')",
        "hero6-bg": "url('../public/hero6.avif')",
        "hero7-bg": "url('../public/hero7.jpg')",
        "hero8-bg": "url('../public/hero8.jpg')",
        "trending-bg": "url('../public/trending.jpg')",
      },
    },
  },
  plugins: [],
};
