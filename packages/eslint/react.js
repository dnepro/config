'use strict';

module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
  },
};
