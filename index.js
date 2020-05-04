module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import',
    'jsdoc',
  ],
  root: true,
  rules: {
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    camelcase: ['off', { ignoreDestructuring: true }],
    'eol-last': ['error', 'always'],
    'max-len': ['error', {
      code: 79,
      comments: 79,
      tabWidth: 2,
      ignoreComments: false,
      ignoreUrls: true,
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': ['off', { allowShortCircuit: true }],
    'no-unused-vars': ['error', { varsIgnorePattern: '^\\$' }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
    }],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],

    // plugin:import
    'import/extensions': 'off',
    'import/no-cycle': 'off',
  },
}
