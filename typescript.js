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
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
    // Disable rules for a mixed js/ts codebase - see `overrides` parameter
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Common rules
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi', requireLast: false },
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],

    // Incompatible rules with TS
    'import/named': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
  },
}
