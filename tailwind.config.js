/** @type {import(''tailwindcss'').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neo: {
          primary: '#F4A261',
          secondary: '#2A9D8F',
          background: '#FDF0D5',
          ink: '#000000',
          muted: '#f8e4b7',
        },
      },
      boxShadow: {
        neo: '8px 8px 0px 0px #000000',
        'neo-sm': '5px 5px 0px 0px #000000',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
