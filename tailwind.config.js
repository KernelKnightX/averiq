/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
        neo: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
