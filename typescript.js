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

    /* unused vars:
     * - disable the base rule as it can report incorrect errors
     * - add the option to explicitly annotated unused vars
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    // Incompatible rules with TS
    'import/named': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
  },
}
