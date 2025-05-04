/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'kyiv-sans': ["kyiv-sans"],
      },
      keyframes: {
        weightPulse: {
          '0%, 100%': {
            fontVariationSettings: "'wght' 200",
            color: '#82AAE9',
          },
          '50%': {
            fontVariationSettings: "'wght' 400",
            color: '#4C7BC7',
          },
          
        },
      },
      animation : {
        'weight-pulse': 'weightPulse 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

