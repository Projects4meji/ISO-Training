/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00809D',    // Teal blue
        secondary: '#FF7601',  // Vibrant orange
        accent: '#F3A26D',    // Soft orange
        light: '#FCECDD',     // Light cream
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 