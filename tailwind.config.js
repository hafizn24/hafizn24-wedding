/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#2b579a",
        accent: "#2d4a6d",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
        parisienne: ['"Parisienne"', 'cursive'],
        noto: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
