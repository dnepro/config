'use strict';

module.exports = {
  plugins: ['jsx-a11y'],
  extends: ['plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
