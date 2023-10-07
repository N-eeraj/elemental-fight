/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#103',
        accent: '#315',
        element: {
          water: '#2B99FF',
          grass: '#45C826',
          rock: '#C0BC8C',
          fire: '#FF662E',
          lightning: '#FFDF00',
        }
      }
    },
  },
  plugins: [],
}