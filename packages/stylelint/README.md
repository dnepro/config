# @dnepro/stylelint-config

This package includes the shareable [Stylelint](https://stylelint.io/) configuration used by [@dnepro](https://github.com/dnepro).

## Usage

This project provides two configuration versions, a ["basic"](#basic) and a ["prettier"](#prettier), if you're project uses [Prettier](https://prettier.io/) you should use the ["prettier"-variant](#prettier).

### Basic

Install this configuration:

```console
npm i -D @dnepro/stylelint-config 
# or
yarn add -D @dnepro/stylelint-config stylelint@^13.2.0 stylelint-config-standard@^21.0.0
```

if necessary (this maybe already happens automatically), please also install the peerDependencies:

```console
npm i -D stylelint@^13.2.0 stylelint-config-standard@^21.0.0
# or respectively
yarn add -D stylelint@^13.2.0 stylelint-config-standard@^21.0.0
```

Add this to your `.stylelintrc.json`:

```json
{
  "extends": "@dnepro/stylelint-config"
}
```

### Prettier

Install this configuration and it's peerDependencies:

```console
npm i -D @dnepro/stylelint-config
# or respectively
yarn add -D @dnepro/stylelint-config
```

if necessary (this maybe already happens automatically), please also install the peerDependencies:

```console
npm i -D stylelint@^13.2.0 stylelint-config-standard@^21.0.0 stylelint-config-prettier@^8.0.1
# or respectively
yarn add -D stylelint@^13.2.0 stylelint-config-standard@^21.0.0 stylelint-config-prettier@^8.0.1
```

Add this to your `.stylelintrc.json`:

```json
{
  "extends": "@dnepro/stylelint-config/prettier"
}
```