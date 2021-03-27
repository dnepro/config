module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['compat', 'jsdoc', 'array-func'],
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:jsdoc/recommended',
    'plugin:array-func/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
};
