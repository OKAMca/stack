/**
 * Custom config base for projects using typescript / javascript.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    ecmaVersion: 2020,
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    'linebreak-style': ['error', 'unix'],
    'import/no-extraneous-dependencies': 'off',
    'no-empty-function': 'off',
    'import/default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/ban-tslint-comment': ['error'],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 10,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/no-empty-function': ['error', { allow: ['private-constructors'] }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['function'],
        format: ['camelCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'classProperty',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'objectLiteralProperty',
        format: [
          'camelCase',
          // Some external libraries use snake_case for params
          'snake_case',
          // Env variables are generally uppercase
          'UPPER_CASE',
          // DB / Graphql might use PascalCase for relationships
          'PascalCase',
        ],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: ['typeAlias', 'interface'],
        format: ['PascalCase'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase'],
        // For graphql __typename
        leadingUnderscore: 'allowDouble',
      },
      {
        selector: ['typeParameter'],
        format: ['PascalCase'],
      },
      {
        selector: 'import',
        format: ['camelCase', 'PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.config.ts'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      // commonjs or assumed
      files: ['*.js', '*.cjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
      rules: {
        'no-param-reassign': 'off',
        'no-console': 'off',
        'func-names': 'off',
        'import/extensions': 'off',
        'global-require': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/order': 'off',
      },
    },
    {
      files: ['*.json'],
      parser: "jsonc-eslint-parser",
      rules: {
        'no-param-reassign': 'off',
        'no-console': 'off',
        'func-names': 'off',
        'import/extensions': 'off',
        'global-require': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-exports': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/order': 'off',

        "@nx/dependency-checks": [
          "error",
          {
            "buildTargets": ["build"],
            "checkMissingDependencies": true,
            "checkObsoleteDependencies": true,
            "checkVersionMismatches": true,
            "ignoredDependencies": [
              "vite", "vite-plugin-dts", "vite-tsconfig-paths", "@nx/react", "@nx/react/tailwind", "@vitejs/plugin-react", "@nx/vite", "rollup-plugin-preserve-directives"
            ],
            "ignoredFiles": ["libs/**/vite.config.ts", "libs/**/tailwind.config.js", "libs/**/rollup.config.js"]
          }
        ]
      },
    }
  ],
}
