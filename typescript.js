module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi', requireLast: false },
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^\\$',
    }],
    'import/named': 'off', // Does not work well with TS
  },
}
