# eslint-config-dnepro

This package includes the shareable ESLint configurations used by [@dnepro](https://github.com/dnepro).

## Usage

### Basic

Install this config:

```bash
npm i -D @dnepro/eslint-config-dnepro
# or respectively
yarn add -D @dnepro/eslint-config-dnepro
```

if necessary (this maybe already happens automatically), please also install the peerDependencies:

```bash
npm i -D @typescript-eslint/eslint-plugin@~4.19.0 @typescript-eslint/parser@~4.19.0 @babel/eslint-parser@~7.13.10 eslint@~7.23.0 eslint-config-prettier@~8.1.0 eslint-plugin-array-func@~3.1.7 eslint-plugin-compat@~3.9.0 eslint-plugin-cypress@~2.11.2 eslint-plugin-import@~2.22.1 eslint-plugin-jest@~24.3.2 eslint-plugin-jsdoc@~32.3.0 eslint-plugin-jsx-a11y@~6.4.1 eslint-plugin-react@~7.23.1 eslint-plugin-react-hooks@~4.2.0 eslint-plugin-testing-library@~3.10.2
# or respectively
yarn add -D @typescript-eslint/eslint-plugin@~4.19.0 @typescript-eslint/parser@~4.19.0 @babel/eslint-parser@~7.13.10 eslint@~7.23.0 eslint-config-prettier@~8.1.0 eslint-plugin-array-func@~3.1.7 eslint-plugin-compat@~3.9.0 eslint-plugin-cypress@~2.11.2 eslint-plugin-import@~2.22.1 eslint-plugin-jest@~24.3.2 eslint-plugin-jsdoc@~32.3.0 eslint-plugin-jsx-a11y@~6.4.1 eslint-plugin-react@~7.23.1 eslint-plugin-react-hooks@~4.2.0 eslint-plugin-testing-library@~3.10.2
```

Then, add @dnepro/eslint-config-dnepro to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.

```json
{
  "extends": [
    "some-other-config-you-use",
    "@dnepro/eslint-config-dnepro"
  ]
}
```

### Custom Configuration

This config contains several "snippets" that can be used *almost* independently of each other.
The ["basic"](#basic)-configuration contains all of the following "snippets".

> ⚠️ You should always include the [base](#base)-snippet.

You can include them like, to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs:

```json
{
  "extends": [
    "some-other-config-you-use",
    "@dnepro/eslint-config-dnepro/base",
    "@dnepro/eslint-config-dnepro/prettier",
    "@dnepro/eslint-config-dnepro/jsx",
    "@dnepro/eslint-config-dnepro/react",
  ]
}
```

> ⚠️ For the "react"-snippet, please consider adding the "jsx"-snippet as well.

#### Snippet Overview

| snippet         | required | for                                                    | dependencies                                                                                                                                         |
| --------------- | -------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| base            | true     | *                                                      | `@babel/eslint-parser eslint-plugin-array-func eslint-plugin-compat @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import` |
| prettier        | false    | [Prettier](https://prettier.io/)                       | `eslint-config-prettier`                                                                                                                             |
| jsx             | false    | [jsx](https://reactjs.org/docs/introducing-jsx.html)   | `eslint-plugin-jsx-a11y`                                                                                                                             |
| react           | false    | [React](https://reactjs.org/docs/introducing-jsx.html) | `eslint-plugin-react eslint-plugin-react-hooks`                                                                                                      |
| prettier        | false    | [Prettier](https://prettier.io/)                       | `eslint-config-prettier`                                                                                                                             |
| jest            | false    | [Jest](https://jestjs.io/)                             | `eslint-plugin-jest`                                                                                                                                 |
| cypress         | false    | [Cypress](https://www.cypress.io/)                     | `eslint-plugin-cypress`                                                                                                                              |
| testing-library | false    | [testing-library](https://testing-library.com/)        | `eslint-plugin-testing-library`                                                                                                                      |
