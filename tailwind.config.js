/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cuberto-black': '#000000',
        'cuberto-white': '#ffffff',
        'pastel-pink': '#FFD6E0',
        'pastel-blue': '#C7CEEA',
        'pastel-yellow': '#FFEFA1',
        'pastel-green': '#C1E1C1',
        'pastel-purple': '#D4C1EC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}