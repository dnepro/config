// https://www.cypress.io/
// https://github.com/cypress-io/eslint-plugin-cypress

module.exports = {
  overrides: [
    {
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      files: ['**/cypress/**/*', '**/cypress/**/*.{spec,test}.*'],
      env: {
        'cypress/globals': true,
      },
    },
  ],
};
