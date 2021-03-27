'use strict';

module.exports = {
  extends: [
    require.resolve('./base.js'),
    require.resolve('./prettier.js'),
    require.resolve('./jsx.js'),
    require.resolve('./react.js'),
    require.resolve('./jest.js'),
    require.resolve('./cypress.js'),
    require.resolve('./testing-library.js'),
  ],
};
