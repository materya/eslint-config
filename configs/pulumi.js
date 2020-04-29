module.exports = {
  extends: [
    require.resolve('./common.js'),
  ],
  plugins: [
    'import',
  ],
  rules: {
    'import/prefer-default-export': ['off'],
  },
}
