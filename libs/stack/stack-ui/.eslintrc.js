const { getDefaultIgnorePatterns } = require('../../../linter/helpers')

module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../../.eslintrc.js',
    '../../../linter/bases/typescript',
    '../../../linter/bases/regexp',
    '../../../linter/bases/jest',
    '../../../linter/bases/rtl',
    '../../../linter/bases/storybook',
    '../../../linter/bases/react',
    '../../../linter/bases/prettier',
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
    '@nx/dependency-checks': [
      'error',
      {
        buildTargets: ['build'],
        checkMissingDependencies: true,
        checkObsoleteDependencies: true,
        checkVersionMismatches: true,
        ignoredDependencies: [
          'vite',
          'vite-plugin-dts',
          'vite-tsconfig-paths',
          '@nx/react',
          '@nx/react/tailwind',
          '@vitejs/plugin-react',
          '@nx/vite',
          'rollup-plugin-preserve-directives',
          'react-dom',
        ],
        ignoredFiles: ['libs/**/vite.config.ts', 'libs/**/tailwind.config.js', 'libs/**/rollup.config.js'],
      },
    ],
  },
}
