const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#71C418',
      secondary: '#1D8DD0',
      transparent: 'transparent',
      background: '#ECF0F5',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      amber: colors.amber,
      green: colors.green,
      blue: colors.blue,
      rose: colors.rose,
      layout: '#363636',
    },
    extend: {
      inset: {
        '15px': '15px',
        '10px': '10px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
