const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.js',
    './pages/**/*.js',
    './components/**/*.tsx',
    './pages/**/*.tsx',
    './_posts/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', 'san-serif'],
        'space-grotesk': ['"Space Grotesk"', 'san-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
