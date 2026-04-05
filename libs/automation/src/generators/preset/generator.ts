import type { GeneratorCallback, Tree } from '@nx/devkit'
import type { PresetGeneratorSchema } from './schema'
import { existsSync } from 'node:fs'
import * as path from 'node:path'
import {
  addDependenciesToPackageJson,
  generateFiles,
  installPackagesTask,
} from '@nx/devkit'

/**
 * Pinned dependency versions — kept in sync with prd.json pinned_versions.
 * Grouped by category for clarity.
 */
const PINNED_VERSIONS = {
  core: {
    'next': '16.1.2',
    'react': '19.2.3',
    'react-dom': '19.2.3',
    'typescript': '5.9.3',
  },
  styling: {
    'tailwindcss': '4.1.18',
    'tailwind-merge': '3.4.0',
    'tailwind-variants': '3.2.2',
  },
  okam: {
    '@okam/stack-ui': '2.0.0',
    '@okam/core-lib': '2.0.0',
    '@okam/next-component': '2.0.0',
    '@okam/react-utils': '0.0.1',
    '@okam/logger': '1.1.0',
  },
  directus: {
    '@okam/directus-next': '2.0.0',
    '@okam/directus-query': '2.0.0',
    '@okam/directus-block': '2.0.0',
  },
  graphql: {
    'graphql': '16.12.0',
    'graphql-request': '7.4.0',
  },
  i18n: {
    'i18next': '25.3.2',
    'react-i18next': '15.6.0',
    'i18next-resources-to-backend': '1.2.1',
  },
  reactAria: {
    'react-aria': '3.45.0',
    '@react-types/shared': '3.32.1',
    'react-stately': '3.43.0',
  },
  forms: {
    'react-hook-form': '7.71.1',
    'zod': '4.3.5',
    '@t3-oss/env-nextjs': '0.13.10',
  },
  data: {
    '@tanstack/react-query': '5.90.20',
  },
} as const

const PINNED_DEV_VERSIONS = {
  nx: {
    'nx': '22.3.3',
    '@nx/next': '22.3.3',
    '@nx/vite': '22.3.3',
    '@nx/storybook': '22.3.3',
    '@nx/js': '22.3.3',
    '@nx/eslint-plugin': '22.3.3',
  },
  linting: {
    'eslint': '9.39.2',
    '@antfu/eslint-config': '7.0.1',
    '@eslint-react/eslint-plugin': '2.9.4',
    'eslint-plugin-react-hooks': '7.0.1',
    'eslint-plugin-react-refresh': '0.4.19',
    '@next/eslint-plugin-next': '16.1.2',
    'prettier': '3.8.0',
  },
  storybook: {
    'storybook': '10.1.11',
    '@storybook/nextjs-vite': '10.1.9',
    '@storybook/react': '10.1.11',
    '@storybook/addon-a11y': '10.1.11',
    '@storybook/addon-docs': '10.1.11',
    '@storybook/test-runner': '0.24.2',
    'axe-playwright': '2.2.2',
  },
  vite: {
    'vite': '6.4.1',
    '@vitejs/plugin-react': '4.7.0',
    'vite-plugin-dts': '4.5.4',
    'vite-tsconfig-paths': '5.1.4',
  },
  types: {
    '@types/react': '19.2.11',
    '@types/react-dom': '19.2.3',
  },
  gitHooks: {
    '@commitlint/cli': '20.3.1',
    '@commitlint/config-conventional': '20.3.1',
    'husky': '9.1.7',
    'lint-staged': '15.5.2',
  },
  graphql: {
    '@graphql-codegen/cli': '6.1.1',
  },
} as const

function normalizeScope(scope: string): string {
  return scope.startsWith('@') ? scope : `@${scope}`
}

function flattenVersions(groups: Record<string, Record<string, string>>): Record<string, string> {
  const result: Record<string, string> = {}
  for (const group of Object.values(groups)) {
    Object.assign(result, group)
  }
  return result
}

function generateFilesIfExists(tree: Tree, srcDir: string, destDir: string, vars: Record<string, string>): void {
  if (existsSync(srcDir)) {
    generateFiles(tree, srcDir, destDir, vars)
  }
}

export function presetGenerator(tree: Tree, options: PresetGeneratorSchema) {
  const scope = normalizeScope(options.scope)
  const appName = `${options.name}-nextjs`
  const includeDirectus = options.includeDirectus !== false

  const templateVars: Record<string, string> = {
    projectName: options.name,
    scope,
    appName,
    includeDirectus: String(includeDirectus),
    tmpl: '',
    dot: '.',
  }

  // -- Section 1: Root configuration files --
  generateFilesIfExists(tree, path.join(__dirname, 'files', 'root'), '.', templateVars)

  // -- Section 2: Next.js app --
  generateFilesIfExists(tree, path.join(__dirname, 'files', 'apps', '__appName__'), `apps/${appName}`, templateVars)

  // -- Section 3: Libraries --
  const libDirs = ['brand-ui', 'storybook', 'blocks', 'i18n'] as const
  for (const lib of libDirs) {
    generateFilesIfExists(tree, path.join(__dirname, 'files', 'libs', lib), `libs/${lib}`, templateVars)
  }

  // -- Section 3b: Queries library (only when Directus is included) --
  if (includeDirectus) {
    generateFilesIfExists(tree, path.join(__dirname, 'files', 'libs', 'queries'), 'libs/queries', templateVars)
  }

  // -- Section 4: Directus app + deploy infra (optional) --
  if (includeDirectus) {
    generateFilesIfExists(tree, path.join(__dirname, 'files', 'apps', 'directus'), 'apps/directus', templateVars)
    generateFilesIfExists(tree, path.join(__dirname, 'files', 'root-directus'), '.', templateVars)
  }

  // -- Section 5: Add pinned dependencies --
  const versionGroups = { ...PINNED_VERSIONS }
  const devVersionGroups = { ...PINNED_DEV_VERSIONS }
  if (!includeDirectus) {
    delete (versionGroups as Record<string, Record<string, string>>).directus
    delete (versionGroups as Record<string, Record<string, string>>).graphql
    delete (devVersionGroups as Record<string, Record<string, string>>).graphql
  }
  const dependencies = flattenVersions(versionGroups)
  const devDependencies = flattenVersions(devVersionGroups)
  const installTask: GeneratorCallback = addDependenciesToPackageJson(tree, dependencies, devDependencies)

  // -- Return install callback --
  return async () => {
    await installTask()
    installPackagesTask(tree)
  }
}

export default presetGenerator
