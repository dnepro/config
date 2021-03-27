'use strict';

// https://github.com/testing-library/eslint-plugin-testing-library
module.exports = {
  overrides: [
    {
      plugins: ['testing-library'],
      extends: ['plugin:testing-library/recommended', 'plugin:testing-library/react'],
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
    },
  ],
};
