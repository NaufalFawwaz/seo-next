/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary1': '#1B9BA2',
        'primary2': '#004E52',
        'primary3': '#F7FBFC'
      },
      keyframes: {
        typing: {
          '0%, 10%, 100%': { width: '0%' },
          '70%, 90%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#1B9BA2' },
        },
      },
      animation: {
        typing: 'typing 7s steps(30, end) infinite, blink 1.5s infinite step-end',
      },
    },
  },
  plugins: [],
};
