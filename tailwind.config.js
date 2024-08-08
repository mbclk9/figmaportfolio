/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'], // Özel font sınıfı tanımlama
      },
      colors: {
        customBackground: '#0f0f0f',
        backgroundtwo:'#1a1a1a',
        primary:'#FFFFFF',
        secondary:'#525252',
        third:'#858585',
        four:'#848484',
        neon:'#D6FF30'
        
      },
    },
  },
  plugins: [],
}

