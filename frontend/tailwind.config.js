/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blue': {
          500: '#164B60',
          400: '#1B6B93',
          300: '#3596B2',
          200: '#4FC0D0',
          100: '#B9E6EC',
        },
        'teal': {
          light:'#D5F3F0',
          DEFAULT:'#2EC4B6',
          dark: '#219186',
        },
        'orange': '#FF4A1C',
        'coffee': '#81523F',
      },
    },
  },
  plugins: [],
}
