module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  overrides: [
    // Enable rules specifically for Typescript files
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
  rules: {
    // Disable rules for a mixed js/ts codebase - see `overrides` parameter
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Common rules
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
