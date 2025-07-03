/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                    // if you have a public/index.html
    './src/**/*.{js,jsx,ts,tsx}', // all JS/TSX files in your src folder
  ],
  theme: {
    extend: {
        //here’s where you can add custom colors, spacing, etc.
      colors: {
        cordisBlue: '#1E3A8A',
        cordisGold: '#FBBF24',
      },
       fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}