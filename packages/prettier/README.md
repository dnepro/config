# @dnepro/prettier-config

![NPM](https://img.shields.io/npm/l/@dnepro/prettier-config)
![npm (scoped)](https://img.shields.io/npm/v/@dnepro/prettier-config)

This package includes the shareable [Prettier](https://prettier.io/) configuration used by [@dnepro](https://github.com/dnepro).

## Installation

```bash
npm i -D @dnepro/prettier-config
# or respectively
yarn add -D @dnepro/prettier-config
```

## Usage

Add this to your `package.json`:

```json
{
  "prettier": "@dnepro/prettier-config"
}
```

or create a `.prettierrc.js` and add the following to it:

```js
module.exports = require('@dnepro/prettier-config');
```
