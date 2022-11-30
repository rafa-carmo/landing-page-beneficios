/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2F80ED',
          300: '#5498F0'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow')
  ]
}
