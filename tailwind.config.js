/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/bg2.jpg')",
      },
      colors: {
        purple: {
          600: '#7C3AED',
        },
        orange: {
          400: '#FB923C',
          500: '#F97316',
        }
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}