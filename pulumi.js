module.exports = {
  extends: [
    './index.js',
  ],
  plugins: [
    'import',
  ],
  rules: {
    'import/prefer-default-export': ['off'],
  },
}
