// @ts-check

/**
 * @type {import('prettier').Config}
 */
const config = {
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'all',
  bracketSameLine: false,
  useTabs: false,
  endOfLine: 'lf',
  semi: false,
  printWidth: 120,
  overrides: [
    {
      files: '*.md',
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
  ],
}

module.exports = config
