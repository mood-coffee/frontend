/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B2E2A', // Espresso
        secondary: '#F4EDE1', // Latte Cream
        accent: '#D9915F', // Terracotta
        natural: '#A3B18A', // Yeşil Misket
        neutral: '#333333', // Koyu Kömür
      },
    },
  },
  plugins: [],
};
