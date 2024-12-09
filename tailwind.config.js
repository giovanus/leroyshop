/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.slate[800],
      },
    },
  },
  plugins: [],
}
