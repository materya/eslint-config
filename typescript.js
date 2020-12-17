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
    // Default as warning, force an error, that's a code smell.
    '@typescript-eslint/no-non-null-assertion': 'error',

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

    /**
     * Naming convention rules:
     *
     * - default to `strictCamelCase`.
     * - mandatory prefixes for `boolean` types.
     * - match `@typescript-eslint/no-unused-vars` rule for unused vars with
     *   a leading underscore.
     * - `StrictPascalCase` for `typeLike` declarations.
     * - allow `snake_case` in destructuring.
     */
    camelcase: 'off',
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      {
        selector: ['variableLike', 'memberLike'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'has', 'should', 'flag'],
        filter: {
          regex: '_',
          match: false,
        },
      },
      {
        selector: ['variableLike', 'memberLike'],
        types: ['boolean'],
        format: ['strictCamelCase'],
        prefix: ['is_', 'has_', 'should_', 'flag_'],
      },

      {
        selector: ['variable', 'parameter'],
        format: ['strictCamelCase'],
        modifiers: ['unused'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },

      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },

      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['strictCamelCase', 'snake_case'],
      },
    ],

    // Incompatible rules with TS
    'import/named': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
  },
}
