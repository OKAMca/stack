const { getDefaultIgnorePatterns } = require('../../../linter/helpers')

module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../../.eslintrc.js',
    '../../../linter/bases/regexp',
    '../../../linter/bases/jest',
    '../../../linter/bases/rtl',
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
    {
      "files": ["{package,project}.json"],
      "parser": "jsonc-eslint-parser",
      "rules": {
        "@nx/dependency-checks": [
          "error",
          {
            "buildTargets": ["build"],
            "checkMissingDependencies": true,
            "checkObsoleteDependencies": true,
            "checkVersionMismatches": true,
            "ignoredDependencies": [
              "vite", "vite-plugin-dts", "vite-tsconfig-paths", "@nx/react", "@vitejs/plugin-react"
            ]
          }
        ]
      }
    }
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
