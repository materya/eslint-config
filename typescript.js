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
        // Disable js rules in favor of specific TS ones
        camelcase: 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',

        // Incompatible rules with TS
        'import/named': 'off',

        // Enforce return type
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
  settings: {
  },
  rules: {
    // Disable rules for a mixed js/ts codebase - see `overrides` parameter
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Simplify notation, removing useless delimiter
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'semi', requireLast: false },
    }],

    // Enforce no-explicit-any as an error
    '@typescript-eslint/no-explicit-any': ['error', {
      fixToUnknown: false,
      ignoreRestArgs: false,
    }],

    // By default a warning. That's a code smell, forcing an error instead.
    '@typescript-eslint/no-non-null-assertion': 'error',

    /* unused vars:
     * - add the option to explicitly annotated unused vars
     */
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    // incompatible no-shadow rule with ts, replace with a specific ts one
    '@typescript-eslint/no-shadow': ['error'],

    /**
     * Naming convention rules:
     *
     * - default to `strictCamelCase`.
     * - match `@typescript-eslint/no-unused-vars` rule for unused vars with
     *   a leading underscore.
     * - `StrictPascalCase` for `typeLike` declarations.
     */
    '@typescript-eslint/naming-convention': ['error',
      {
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        selector: 'default',
        trailingUnderscore: 'forbid',
      },

      // Match unused vars rule with leading underscore allowed
      {
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
        modifiers: ['unused'],
        selector: ['variable', 'parameter'],
        trailingUnderscore: 'forbid',
      },

      /**
       * Special members convention as PascalCase
       */
      {
        format: ['StrictPascalCase'],
        selector: ['enumMember', 'typeLike'],
      },

      /**
       * Allow snake_case on destructuring
       */
      // {
      //   format: ['strictCamelCase', 'snake_case'],
      //   modifiers: ['destructured'],
      //   selector: 'variable',
      // },
    ],

  },
}
