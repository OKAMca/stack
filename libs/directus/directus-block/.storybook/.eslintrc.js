const { getDefaultIgnorePatterns } = require('../../../../linter/helpers')

module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../../../.eslintrc.js',
    '../../../../linter/bases/typescript',
    '../../../../linter/bases/regexp',
    '../../../../linter/bases/jest',
    '../../../../linter/bases/rtl',
    '../../../../linter/bases/storybook',
    '../../../../linter/bases/react',
    '../../../../linter/bases/prettier',
  ],
  ignorePatterns: ['!**/*', ...getDefaultIgnorePatterns()],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      // We set parserOptions.project for the project to allow TypeScript to create the type-checker behind the scenes when we run linting
      parserOptions: {
        project: `${__dirname}/tsconfig.*?.json`,
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
