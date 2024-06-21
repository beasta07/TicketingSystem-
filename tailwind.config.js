/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '904px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '3600px',
    },
    extend: {
      container: {
        center: true,
        padding: '0.1rem',
      },
    },
  },
  plugins: [],
}
