/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add this line to ensure the `react-datepicker` CSS is included
    "node_modules/react-datepicker/dist/react-datepicker.css", 
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  keyframes: {
    'open-menu': {
      '0%': { transform: 'scaleY(0)' },
      '80%': { transform: 'scaleY(1.2)' },
      '100%': { transform: 'scaleY(1)' },
    },
  },
  animation: {
    'open-menu': 'open-menu 0.5s ease-in-out forwards',
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ['dark'],
  },
}
