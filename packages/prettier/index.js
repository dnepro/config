'use strict';

module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 110,
  useTabs: false,
  quoteProps: 'consistent',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: ['package.json', 'package-lock.json', '*.md'],
      options: {
        printWidth: 80,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false,
      },
    },
  ],
};
