const { getDefaultIgnorePatterns } = require("../../linter/helpers");

module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../.eslintrc.js',
    '../../linter/bases/typescript',
    '../../linter/bases/regexp',
    '../../linter/bases/jest',
    '../../linter/bases/rtl',
    '../../linter/bases/storybook',
    '../../linter/bases/react',
    'plugin:@next/next/core-web-vitals',
    'plugin:@next/next/recommended',
    '../../linter/bases/prettier',
  ],
  ignorePatterns: ['!**/*', ...getDefaultIgnorePatterns(), '.next', 'next-env.d.ts', 'public/**/*', '.out', 'jest.config.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      // We set parserOptions.project for the project to allow TypeScript to create the type-checker behind the scenes when we run linting
      parserOptions: {
        project: `${__dirname}/tsconfig.json`,
      },
    },
    {
      files: ['src/pages/\\_*.{ts,tsx}'],
      rules: {
        'react/display-name': 'off',
      },
    },
    {
      files: ['src/backend/**/*graphql*schema*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            // Fine-tune naming convention for graphql resolvers and allow PascalCase
            selector: ['objectLiteralProperty'],
            format: ['camelCase', 'PascalCase'],
          },
        ],
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
