module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'import',
    'react'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': ['error', 'always'],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'comma-style': [2, 'last'],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'no-unused-vars': 0,
    'no-const-assign': 1,
    'no-var': 1,
    'indent': ['error', 2],
    'no-whitespace-before-property': 1,
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'quote-props': ['warn', 'as-needed'],
    'no-array-constructor': 1,
    'no-new-object': 1,
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'prefer-const': 2,
    'prefer-template': 1,
    'prefer-spread': 2,
    'prefer-rest-params': 2,
    'padded-blocks': ['error', 'never'],
    'eqeqeq': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false } ],
    'no-loop-func': ['error'],
    'dot-notation': ['error'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'camelcase': ['error', { properties: 'never' }],
    'array-bracket-spacing': ['error', 'never'],
    'semi': ['error', 'never'],

    // jsx
    'react/jsx-space-before-closing': ['warn', 'always']
  }
}
