/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1000px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '555px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      'white':'#ffffff',
      'silver':'#c0c0c0',
      'gray': '#404040',
      'blue':'#1a73e8',
      'dark-gray':'#3d3d3d',
      'light-green':'#34a853',
      
      'pink': '#ff49db',
      'orange': '#ffa500',
      'green': '#13ce66',
      'gray-dark': '#273444',
      // 'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
}

