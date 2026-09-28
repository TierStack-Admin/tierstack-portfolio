/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-dark-green': '#1E332A',
        'primary-container': '#e7c546',
        'surface-off-white': '#F9FBF9',
        'surface-light-gray': '#F1F4F2',
        'on-surface': '#012016',
        'on-surface-variant': '#4c4635',
        'secondary-fixed': '#a7f2cb',
        'outline-variant': '#cfc6af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
