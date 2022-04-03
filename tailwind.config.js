module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/**/*.html',
      './*.html',

      './_includes/**/*.md',
      './_layouts/**/*.md',
      './_posts/**/*.md',
      './*.md',
    ],
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }