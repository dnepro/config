// https://github.com/jest-community/eslint-plugin-jest#readme
module.exports = {
  overrides: [
    {
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
