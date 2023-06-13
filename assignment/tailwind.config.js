/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        card_main: '#FFFFFF',
        card_border: '#E6E6E6',
        font_dark: '#212121',
        font_light: '#FAFAFA',
        error: '#D86161',
        placeholder: '#7A7A7A',
      },
    },
  },
  plugins: [],
}

