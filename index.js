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
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import',
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
      ignoreComments: true,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-expressions': ['off', { allowShortCircuit: true }],
    'no-unused-vars': ['error', {
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
    }],
    semi: ['error', 'never'],
    'semi-style': ['error', 'first'],
    'space-before-function-paren': ['error', 'always'],

    // plugin:import
    'import/extensions': 'off',
    'import/no-cycle': 'off',
  },
}
