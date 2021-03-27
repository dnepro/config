'use strict';

module.exports = {
  extends: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['prettier/@typescript-eslint'],
    },
  ],
};
