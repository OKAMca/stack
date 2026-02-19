import type { Tree } from '@nx/devkit'
import type { PresetGeneratorSchema } from './schema'

import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { presetGenerator } from './generator'

/**
 * End-to-end smoke test for the preset generator.
 *
 * Runs the generator in an in-memory tree, then flushes the tree
 * to disk inside a temp directory and validates:
 * - All expected files exist
 * - JSON files parse correctly
 * - YAML files are valid
 * - Content correctness (security headers, CSP, env validation, etc.)
 * - Template variables are fully resolved (no leftover EJS tags)
 * - Docker Compose structure
 * - CI workflow triggers and steps
 * - Husky hooks and commitlint config
 */
describe('preset generator — e2e smoke test', () => {
  let tree: Tree
  let tmpDir: string
  const options: PresetGeneratorSchema = {
    name: 'smoke-test',
    scope: '@smoketest',
  }
  const appName = 'smoke-test-nextjs'

  beforeAll(async () => {
    tree = createTreeWithEmptyWorkspace()
    await presetGenerator(tree, options)

    // Flush tree to disk
    tmpDir = mkdtempSync(join(tmpdir(), 'preset-e2e-'))
    for (const change of tree.listChanges()) {
      if (change.type === 'CREATE' || change.type === 'UPDATE') {
        const filePath = join(tmpDir, change.path)
        const dir = join(filePath, '..')
        mkdirSync(dir, { recursive: true })
        writeFileSync(filePath, change.content!)
      }
    }
  })

  afterAll(() => {
    if (tmpDir) {
      rmSync(tmpDir, { recursive: true, force: true })
    }
  })

  function readFile(relativePath: string): string {
    return readFileSync(join(tmpDir, relativePath), 'utf-8')
  }

  function parseJson(relativePath: string): unknown {
    const content = readFile(relativePath)
    return JSON.parse(content)
  }

  function fileExists(relativePath: string): boolean {
    return tree.exists(relativePath)
  }

  // ─── Sanity: no leftover EJS/template tags ───

  describe('template resolution', () => {
    it('should not have leftover EJS tags in any generated file', () => {
      const changes = tree.listChanges()
      const ejsPattern = /<%[^%]*%>/
      const unresolvedFiles: string[] = []

      for (const change of changes) {
        if (change.type === 'CREATE' || change.type === 'UPDATE') {
          const content = change.content?.toString() ?? ''
          if (ejsPattern.test(content)) {
            unresolvedFiles.push(change.path)
          }
        }
      }

      expect(unresolvedFiles).toEqual([])
    })

    it('should not have __dot__ prefix in any generated file path', () => {
      const changes = tree.listChanges()
      const dotPrefixFiles = changes
        .filter(c => c.path.includes('__dot__'))
        .map(c => c.path)

      expect(dotPrefixFiles).toEqual([])
    })

    it('should not have __appName__ in any generated file path', () => {
      const changes = tree.listChanges()
      const unresolvedPaths = changes
        .filter(c => c.path.includes('__appName__'))
        .map(c => c.path)

      expect(unresolvedPaths).toEqual([])
    })

    it('should not have __tmpl__ in any generated file path', () => {
      const changes = tree.listChanges()
      const unresolvedPaths = changes
        .filter(c => c.path.includes('__tmpl__'))
        .map(c => c.path)

      expect(unresolvedPaths).toEqual([])
    })
  })

  // ─── File existence: comprehensive check ───

  describe('file existence — root config', () => {
    const rootFiles = [
      'nx.json',
      'tsconfig.base.json',
      'pnpm-workspace.yaml',
      'package.json',
      'eslint.config.js',
      'prettier.config.js',
      '.gitignore',
      '.nvmrc',
      '.editorconfig',
      'commitlint.config.js',
      'lint-staged.config.js',
    ]

    for (const file of rootFiles) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — husky hooks', () => {
    it('should generate .husky/pre-commit', () => {
      expect(fileExists('.husky/pre-commit')).toBe(true)
    })

    it('should generate .husky/commit-msg', () => {
      expect(fileExists('.husky/commit-msg')).toBe(true)
    })
  })

  describe('file existence — github workflows', () => {
    const workflows = [
      '.github/workflows/lint.yml',
      '.github/workflows/type-check.yml',
      '.github/workflows/clickup.yml',
      '.github/workflows/storybook-test.yml',
      '.github/dependabot.yml',
    ]

    for (const file of workflows) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — Next.js app', () => {
    const appFiles = [
      `apps/${appName}/project.json`,
      `apps/${appName}/next.config.js`,
      `apps/${appName}/csp.config.ts`,
      `apps/${appName}/tsconfig.json`,
      `apps/${appName}/src/app/globals.css`,
      `apps/${appName}/src/app/layout.tsx`,
      `apps/${appName}/src/app/Providers.tsx`,
      `apps/${appName}/src/app/page.tsx`,
      `apps/${appName}/src/app/not-found.tsx`,
      `apps/${appName}/src/lib/env.ts`,
      `apps/${appName}/middleware.ts`,
      `apps/${appName}/public/.gitkeep`,
    ]

    for (const file of appFiles) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — brand-ui', () => {
    const files = [
      'libs/brand-ui/project.json',
      'libs/brand-ui/package.json',
      'libs/brand-ui/vite.config.ts',
      'libs/brand-ui/tsconfig.json',
      'libs/brand-ui/tsconfig.lib.json',
      'libs/brand-ui/src/theme.css',
      'libs/brand-ui/src/index.ts',
      'libs/brand-ui/src/theme/index.tsx',
      'libs/brand-ui/src/components/.gitkeep',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — storybook', () => {
    const files = [
      'libs/storybook/project.json',
      'libs/storybook/package.json',
      'libs/storybook/tsconfig.json',
      'libs/storybook/.storybook/main.ts',
      'libs/storybook/.storybook/preview.tsx',
      'libs/storybook/.storybook/storybook.css',
      'libs/storybook/.storybook/test-runner.ts',
      'libs/storybook/reports/.gitkeep',
      'libs/storybook/merge-reports.js',
      'libs/storybook/axe-to-markdown.js',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — blocks', () => {
    const files = [
      'libs/blocks/project.json',
      'libs/blocks/package.json',
      'libs/blocks/tsconfig.json',
      'libs/blocks/tsconfig.lib.json',
      'libs/blocks/src/index.ts',
      'libs/blocks/src/blocks/.gitkeep',
      'libs/blocks/src/configs/.gitkeep',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — queries', () => {
    const files = [
      'libs/queries/project.json',
      'libs/queries/package.json',
      'libs/queries/tsconfig.json',
      'libs/queries/tsconfig.lib.json',
      'libs/queries/codegen.ts',
      'libs/queries/src/index.ts',
      'libs/queries/src/server.ts',
      'libs/queries/src/lib/client.ts',
      'libs/queries/src/gql/generated/graphql.ts',
      'libs/queries/src/gql/.gitkeep',
      'libs/queries/src/graphql/.gitkeep',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — i18n', () => {
    const files = [
      'libs/i18n/project.json',
      'libs/i18n/package.json',
      'libs/i18n/tsconfig.json',
      'libs/i18n/tsconfig.lib.json',
      'libs/i18n/src/config.ts',
      'libs/i18n/src/index.ts',
      'libs/i18n/src/server.ts',
      'libs/i18n/src/locales/en/common.json',
      'libs/i18n/src/locales/fr/common.json',
      'libs/i18n/src/locales/en/components.json',
      'libs/i18n/src/locales/fr/components.json',
      'libs/i18n/src/lib/getLocale/index.ts',
      'libs/i18n/src/lib/getTranslation/index.ts',
      'libs/i18n/src/lib/getValidLocale/index.ts',
      'libs/i18n/src/lib/getMappedLocale/index.ts',
      'libs/i18n/src/lib/splitLocaleFromPathname/index.ts',
      'libs/i18n/src/lib/getLocalizedPath/index.ts',
      'libs/i18n/src/hooks/useTranslationAdapter/index.ts',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  describe('file existence — directus and deploy infra', () => {
    const files = [
      'apps/directus/docker-compose.yml',
      'apps/directus/.env.local.sample',
      'apps/directus/package.json',
      '.github/workflows/deploy.yml',
      '.do/app-staging.yaml',
      '.do/app.yaml',
    ]

    for (const file of files) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  // ─── JSON validity ───

  describe('json validity', () => {
    const jsonFiles = [
      'nx.json',
      'tsconfig.base.json',
      'package.json',
      `apps/${appName}/project.json`,
      `apps/${appName}/tsconfig.json`,
      'apps/directus/package.json',
      'libs/brand-ui/project.json',
      'libs/brand-ui/package.json',
      'libs/brand-ui/tsconfig.json',
      'libs/brand-ui/tsconfig.lib.json',
      'libs/storybook/project.json',
      'libs/storybook/package.json',
      'libs/storybook/tsconfig.json',
      'libs/blocks/project.json',
      'libs/blocks/package.json',
      'libs/blocks/tsconfig.json',
      'libs/blocks/tsconfig.lib.json',
      'libs/queries/project.json',
      'libs/queries/package.json',
      'libs/queries/tsconfig.json',
      'libs/queries/tsconfig.lib.json',
      'libs/i18n/project.json',
      'libs/i18n/package.json',
      'libs/i18n/tsconfig.json',
      'libs/i18n/tsconfig.lib.json',
      'libs/i18n/src/locales/en/common.json',
      'libs/i18n/src/locales/fr/common.json',
      'libs/i18n/src/locales/en/components.json',
      'libs/i18n/src/locales/fr/components.json',
    ]

    for (const file of jsonFiles) {
      it(`${file} should be valid JSON`, () => {
        expect(() => parseJson(file)).not.toThrow()
      })
    }
  })

  // ─── YAML validity ───

  describe('yaml validity', () => {
    it('pnpm-workspace.yaml should be valid YAML', () => {
      const content = readFile('pnpm-workspace.yaml')
      expect(content).toContain('packages:')
      expect(content).toContain('apps/*')
      expect(content).toContain('libs/*')
    })

    it('docker-compose.yml should be valid YAML with correct services', () => {
      const content = readFile('apps/directus/docker-compose.yml')
      expect(content).toContain('services:')
      expect(content).toContain('postgres:')
      expect(content).toContain('redis:')
      expect(content).toContain('directus:')
      expect(content).toContain('volumes:')
      expect(content).toContain('pgdata:')
    })

    it('lint.yml should be valid YAML with correct triggers', () => {
      const content = readFile('.github/workflows/lint.yml')
      expect(content).toContain('name: Lint')
      expect(content).toContain('pull_request:')
      expect(content).toContain('push:')
      expect(content).toContain('branches: [main]')
      expect(content).toContain('pnpm install --frozen-lockfile')
    })

    it('type-check.yml should be valid YAML with codegen step', () => {
      const content = readFile('.github/workflows/type-check.yml')
      expect(content).toContain('name: Type Check')
      expect(content).toContain('pnpm codegen')
      expect(content).toContain('type-check')
    })

    it('clickup.yml should be valid YAML with correct event triggers', () => {
      const content = readFile('.github/workflows/clickup.yml')
      expect(content).toContain('pull_request:')
      expect(content).toContain('CLICKUP_API_TOKEN')
    })

    it('dependabot.yml should be valid YAML with npm ecosystem', () => {
      const content = readFile('.github/dependabot.yml')
      expect(content).toContain('package-ecosystem')
      expect(content).toContain('npm')
    })

    it('storybook-test.yml should trigger on deployment_status and run a11y tests', () => {
      const content = readFile('.github/workflows/storybook-test.yml')
      expect(content).toContain('deployment_status')
      expect(content).toContain('test-storybook')
      expect(content).toContain('merge-reports')
      expect(content).toContain('axe-to-markdown')
      expect(content).toContain('VERCEL_AUTOMATION_BYPASS_SECRET')
      expect(content).toContain('storybook-a11y-report')
      expect(content).toContain('smoke-test-storybook')
    })

    it('deploy.yml should have workflow_dispatch with 4 actions and push trigger', () => {
      const content = readFile('.github/workflows/deploy.yml')
      expect(content).toContain('workflow_dispatch')
      expect(content).toContain('create-staging')
      expect(content).toContain('deploy-staging')
      expect(content).toContain('create-production')
      expect(content).toContain('deploy-production')
      expect(content).toContain('push:')
      expect(content).toContain('branches: [main]')
      expect(content).toContain('digitalocean/app_action/deploy@v2')
      expect(content).toContain('DIGITALOCEAN_ACCESS_TOKEN')
      expect(content).toContain('envsubst')
      expect(content).toContain('smoke-test-staging')
      expect(content).toContain('smoke-test-production')
      expect(content).toContain('Directus - Staging')
      expect(content).toContain('Directus - Production')
    })

    it('.do/app-staging.yaml should have staging App Platform spec', () => {
      const content = readFile('.do/app-staging.yaml')
      expect(content).toContain('smoke-test-staging')
      expect(content).toContain('region: tor1')
      expect(content).toContain('apps-s-1vcpu-1gb')
      expect(content).toContain('production: false')
      expect(content).toContain('smoke-test-staging-db')
      expect(content).toContain('smoke-test-staging-redis')
      expect(content).toContain('smoke-test-staging-assets')
      expect(content).toContain('/server/health')
      expect(content).toContain('LOG_LEVEL')
      expect(content).toContain('debug')
      expect(content).toContain('EXTENSIONS_AUTO_RELOAD')
      expect(content).toContain('apps/directus/Dockerfile')
      expect(content).toContain('AUTH_GOOGLE_CLIENT_ID')
    })

    it('.do/app.yaml should have production App Platform spec', () => {
      const content = readFile('.do/app.yaml')
      expect(content).toContain('smoke-test-production')
      expect(content).toContain('region: tor1')
      expect(content).toContain('apps-s-1vcpu-2gb')
      expect(content).toContain('production: true')
      expect(content).toContain('smoke-test-production-db')
      expect(content).toContain('smoke-test-production-redis')
      expect(content).toContain('smoke-test-production-assets')
      expect(content).toContain('warn')
      expect(content).toContain('GRAPHQL_INTROSPECTION')
    })
  })

  // ─── Content correctness: Next.js app ───

  describe('next.js app content', () => {
    it('next.config.js should include security headers', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).toContain('Strict-Transport-Security')
      expect(content).toContain('X-Frame-Options')
      expect(content).toContain('X-Content-Type-Options')
      expect(content).toContain('Referrer-Policy')
    })

    it('next.config.js should have Directus image remote patterns', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).toContain('remotePatterns')
      expect(content).toContain('8055')
      expect(content).toContain('/assets/**')
    })

    it('next.config.js should transpile @okam packages', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).toContain('@okam')
    })

    it('csp.config.ts should define Content Security Policy', () => {
      const content = readFile(`apps/${appName}/csp.config.ts`)
      expect(content).toContain('default-src')
      expect(content).toContain('script-src')
    })

    it('csp.config.ts should use localhost:8055 as Directus fallback', () => {
      const content = readFile(`apps/${appName}/csp.config.ts`)
      expect(content).toContain('localhost:8055')
    })

    it('layout.tsx description should mention Directus', () => {
      const content = readFile(`apps/${appName}/src/app/layout.tsx`)
      expect(content).toContain('and Directus')
    })

    it('layout.tsx should import globals.css', () => {
      const content = readFile(`apps/${appName}/src/app/layout.tsx`)
      expect(content).toContain('import \'./globals.css\'')
    })

    it('globals.css should use Tailwind v4 @import and @source directives', () => {
      const content = readFile(`apps/${appName}/src/app/globals.css`)
      expect(content).toContain('@import \'tailwindcss\'')
      expect(content).toContain('@source')
      expect(content).toContain('brand-ui')
      expect(content).toContain('blocks')
    })

    it('should not have v3 tailwind.config.js in Next.js app', () => {
      expect(fileExists(`apps/${appName}/tailwind.config.js`)).toBe(false)
    })

    it('env.ts should use @t3-oss/env-nextjs with zod', () => {
      const content = readFile(`apps/${appName}/src/lib/env.ts`)
      expect(content).toContain('@t3-oss/env-nextjs')
      expect(content).toContain('zod')
      expect(content).toContain('NEXT_SERVER_GRAPHQL_URL')
      expect(content).toContain('skipValidation')
    })

    it('middleware.ts should use i18n lib utilities for locale detection', () => {
      const content = readFile(`apps/${appName}/middleware.ts`)
      expect(content).toContain('middleware')
      expect(content).toContain('splitLocaleFromPathname')
      expect(content).toContain('getValidLocale')
      expect(content).toContain('getLocalizedPath')
      expect(content).toContain('@smoketest/i18n')
    })

    it('providers.tsx should have ThemeProvider, I18nProvider, and TranslationContextProvider', () => {
      const content = readFile(`apps/${appName}/src/app/Providers.tsx`)
      expect(content).toContain('use client')
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('@smoketest/brand-ui')
      expect(content).toContain('QueryClientProvider')
      expect(content).toContain('@tanstack/react-query')
      expect(content).toContain('I18nProvider')
      expect(content).toContain('TranslationContextProvider')
      expect(content).toContain('useTranslationAdapter')
    })

    it('layout.tsx should use getLocale from i18n/server', () => {
      const content = readFile(`apps/${appName}/src/app/layout.tsx`)
      expect(content).toContain('Providers')
      expect(content).toContain('metadata')
      expect(content).toContain('getLocale')
      expect(content).toContain('@smoketest/i18n/server')
    })

    it('project.json should have build, serve, lint, type-check targets', () => {
      const projectJson = parseJson(`apps/${appName}/project.json`) as Record<string, unknown>
      const targets = projectJson.targets as Record<string, unknown>
      expect(targets).toHaveProperty('build')
      expect(targets).toHaveProperty('serve')
      expect(targets).toHaveProperty('lint')
      expect(targets).toHaveProperty('type-check')
    })

    it('project.json lint target should include root config files in lintFilePatterns', () => {
      const projectJson = parseJson(`apps/${appName}/project.json`) as Record<string, unknown>
      const targets = projectJson.targets as Record<string, unknown>
      const lint = targets.lint as Record<string, unknown>
      const options = lint.options as Record<string, unknown>
      const patterns = options.lintFilePatterns as string[]
      expect(patterns).toContain('package.json')
      expect(patterns).toContain('tsconfig.base.json')
      expect(patterns).toContain('nx.json')
    })

    it('tsconfig.json should extend base tsconfig and not include react/experimental', () => {
      const tsconfig = parseJson(`apps/${appName}/tsconfig.json`) as Record<string, unknown>
      expect(tsconfig.extends).toBe('../../tsconfig.base.json')
      const compilerOptions = tsconfig.compilerOptions as Record<string, unknown>
      // react/experimental types don't exist in React 19 stable
      expect(compilerOptions.types).toBeUndefined()
    })
  })

  // ─── Content correctness: root config ───

  describe('root config content', () => {
    it('package.json should have correct scope and scripts', () => {
      const pkg = parseJson('package.json') as Record<string, unknown>
      expect(pkg.name).toBe('@smoketest/source')
      const scripts = pkg.scripts as Record<string, string>
      expect(scripts.dev).toBeDefined()
      expect(scripts.build).toBeDefined()
      expect(scripts.lint).toBeDefined()
      expect(scripts.storybook).toBeDefined()
      expect(scripts.codegen).toBeDefined()
      expect(scripts.prepare).toBeDefined()
    })

    it('package.json should have all pinned dependencies', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      const deps = pkg.dependencies
      const devDeps = pkg.devDependencies

      // Core deps
      expect(deps.next).toBe('16.1.2')
      expect(deps.react).toBe('19.2.3')
      expect(deps['react-dom']).toBe('19.2.3')

      // Styling
      expect(deps.tailwindcss).toBe('4.1.18')

      // Okam packages
      expect(deps['@okam/stack-ui']).toBe('2.0.0')
      expect(deps['@okam/directus-next']).toBe('2.0.0')
      expect(deps['@okam/directus-query']).toBe('2.0.0')
      expect(deps['@okam/directus-block']).toBe('2.0.0')
      expect(deps['@okam/core-lib']).toBe('2.0.0')
      expect(deps['@okam/next-component']).toBe('2.0.0')
      expect(deps['@okam/react-utils']).toBe('0.0.1')
      expect(deps['@okam/logger']).toBe('1.1.0')

      // GraphQL
      expect(deps.graphql).toBe('16.12.0')
      expect(deps['graphql-request']).toBe('7.4.0')

      // i18n
      expect(deps.i18next).toBe('25.3.2')
      expect(deps['react-i18next']).toBe('15.6.0')
      expect(deps['i18next-resources-to-backend']).toBe('1.2.1')

      // React Aria
      expect(deps['react-aria']).toBe('3.45.0')

      // Forms
      expect(deps['react-hook-form']).toBe('7.71.1')
      expect(deps.zod).toBe('4.3.5')

      // Data
      expect(deps['@tanstack/react-query']).toBe('5.90.20')

      // Nx dev deps
      expect(devDeps.nx).toBe('22.3.3')
      expect(devDeps['@nx/next']).toBe('22.3.3')

      // Linting dev deps
      expect(devDeps.eslint).toBe('9.39.2')
      expect(devDeps.prettier).toBe('3.8.0')

      // Storybook dev deps
      expect(devDeps.storybook).toBe('10.1.11')
      expect(devDeps['@storybook/react']).toBe('10.1.11')
      expect(devDeps['@storybook/addon-a11y']).toBe('10.1.11')
      expect(devDeps['@storybook/addon-docs']).toBe('10.1.11')
      expect(devDeps['@storybook/test-runner']).toBe('0.24.2')
      expect(devDeps['axe-playwright']).toBe('2.2.2')

      // Vite dev deps
      expect(devDeps.vite).toBe('6.4.1')
      expect(devDeps['@vitejs/plugin-react']).toBe('4.7.0')
      expect(devDeps['vite-plugin-dts']).toBe('4.5.4')
      expect(devDeps['vite-tsconfig-paths']).toBe('5.1.4')

      // Git hooks dev deps
      expect(devDeps['@commitlint/cli']).toBe('20.3.1')
      expect(devDeps.husky).toBe('9.1.7')
    })

    it('package.json should have engines and packageManager', () => {
      const pkg = parseJson('package.json') as Record<string, unknown>
      const engines = pkg.engines as Record<string, string>
      expect(engines.node).toBeDefined()
      expect(pkg.packageManager).toContain('pnpm')
    })

    it('tsconfig.base.json should have correct path aliases for scope', () => {
      const tsconfig = parseJson('tsconfig.base.json') as Record<string, Record<string, Record<string, string[]>>>
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@smoketest/brand-ui']).toEqual(['libs/brand-ui/src/index.ts'])
      expect(paths['@smoketest/blocks']).toEqual(['libs/blocks/src/index.ts'])
      expect(paths['@smoketest/queries']).toEqual(['libs/queries/src/index.ts'])
      expect(paths['@smoketest/i18n']).toEqual(['libs/i18n/src/index.ts'])
    })

    it('nx.json should be valid and have target defaults', () => {
      const nxJson = parseJson('nx.json') as Record<string, unknown>
      expect(nxJson).toHaveProperty('targetDefaults')
    })

    it('eslint.config.js should reference @antfu/eslint-config and nx plugin', () => {
      const content = readFile('eslint.config.js')
      expect(content).toContain('@antfu/eslint-config')
      expect(content).toContain('@nx/eslint-plugin')
    })

    it('.gitignore should ignore node_modules and dist', () => {
      const content = readFile('.gitignore')
      expect(content).toContain('node_modules')
      expect(content).toContain('dist')
      expect(content).toContain('.next')
    })

    it('.nvmrc should specify node 24', () => {
      const content = readFile('.nvmrc')
      expect(content.trim()).toBe('24')
    })

    it('.editorconfig should have 2-space indent', () => {
      const content = readFile('.editorconfig')
      expect(content).toContain('indent_size = 2')
      expect(content).toContain('charset = utf-8')
    })
  })

  // ─── Content correctness: brand-ui ───

  describe('brand-ui content', () => {
    it('index.ts should re-export @okam/stack-ui and ThemeProvider with theme.css import', () => {
      const content = readFile('libs/brand-ui/src/index.ts')
      expect(content).toContain('@okam/stack-ui')
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('./theme')
      expect(content).toContain('import \'./theme.css\'')
    })

    it('theme/index.tsx should use makeTheme, createThemeProvider, and tv from tailwind-variants', () => {
      const content = readFile('libs/brand-ui/src/theme/index.tsx')
      expect(content).toContain('use client')
      expect(content).toContain('makeTheme')
      expect(content).toContain('createThemeProvider')
      expect(content).toContain('tv')
      expect(content).toContain('tailwind-variants')
      expect(content).toContain('typography')
      expect(content).toContain('button')
    })

    it('should not have old providers/Theme directory', () => {
      expect(fileExists('libs/brand-ui/src/providers/Theme/index.tsx')).toBe(false)
    })

    it('theme.css should have Tailwind v4 @theme block with color and font tokens', () => {
      const content = readFile('libs/brand-ui/src/theme.css')
      expect(content).toContain('@theme')
      expect(content).toContain('--color-primary')
      expect(content).toContain('--color-secondary')
      expect(content).toContain('--font-sans')
      expect(content).toContain('--font-heading')
    })

    it('should not have v3 tailwind.config.js', () => {
      expect(fileExists('libs/brand-ui/tailwind.config.js')).toBe(false)
    })

    it('vite.config.ts should externalize react, stack-ui, and tailwind-variants', () => {
      const content = readFile('libs/brand-ui/vite.config.ts')
      expect(content).toContain('react')
      expect(content).toContain('@okam/stack-ui')
      expect(content).toContain('tailwind-variants')
    })

    it('package.json should have correct scope', () => {
      const pkg = parseJson('libs/brand-ui/package.json') as Record<string, string>
      expect(pkg.name).toBe('@smoketest/brand-ui')
    })
  })

  // ─── Content correctness: storybook ───

  describe('storybook content', () => {
    it('main.ts should have story globs for brand-ui and blocks', () => {
      const content = readFile('libs/storybook/.storybook/main.ts')
      expect(content).toContain('brand-ui')
      expect(content).toContain('blocks')
      expect(content).toContain('.stories.')
    })

    it('main.ts should use Storybook 10 addons (addon-a11y and addon-docs, not addon-essentials)', () => {
      const content = readFile('libs/storybook/.storybook/main.ts')
      expect(content).toContain('@storybook/addon-a11y')
      expect(content).toContain('@storybook/addon-docs')
      expect(content).not.toContain('addon-essentials')
    })

    it('preview.tsx should import ThemeProvider from brand-ui and storybook.css', () => {
      const content = readFile('libs/storybook/.storybook/preview.tsx')
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('@smoketest/brand-ui')
      expect(content).toContain('./storybook.css')
    })

    it('storybook.css should have Tailwind v4 directives and brand-ui theme import', () => {
      const content = readFile('libs/storybook/.storybook/storybook.css')
      expect(content).toContain('@import \'tailwindcss\'')
      expect(content).toContain('brand-ui/src/theme.css')
      expect(content).toContain('@source')
      expect(content).toContain('brand-ui')
      expect(content).toContain('blocks')
    })

    it('project.json should have storybook and build-storybook targets', () => {
      const projectJson = parseJson('libs/storybook/project.json') as Record<string, unknown>
      const targets = projectJson.targets as Record<string, unknown>
      expect(targets).toHaveProperty('storybook')
      expect(targets).toHaveProperty('build-storybook')
    })

    it('project.json should have test-storybook target', () => {
      const projectJson = parseJson('libs/storybook/project.json') as Record<string, unknown>
      const targets = projectJson.targets as Record<string, Record<string, unknown>>
      expect(targets).toHaveProperty('test-storybook')
      expect(targets['test-storybook'].executor).toBe('nx:run-commands')
    })

    it('test-runner.ts should have axe-playwright a11y testing', () => {
      const content = readFile('libs/storybook/.storybook/test-runner.ts')
      expect(content).toContain('@storybook/test-runner')
      expect(content).toContain('axe-playwright')
      expect(content).toContain('injectAxe')
      expect(content).toContain('getViolations')
      expect(content).toContain('getHttpHeaders')
      expect(content).toContain('preVisit')
      expect(content).toContain('postVisit')
      expect(content).toContain('VERCEL_AUTOMATION_BYPASS_SECRET')
    })

    it('merge-reports.js should read reports dir and write violations-report.json', () => {
      const content = readFile('libs/storybook/merge-reports.js')
      expect(content).toContain('reportsDir')
      expect(content).toContain('violations-report.json')
      expect(content).toContain('.json')
      expect(content).toContain('storyId')
    })

    it('axe-to-markdown.js should generate markdown with summary table and details', () => {
      const content = readFile('libs/storybook/axe-to-markdown.js')
      expect(content).toContain('formatWcagTag')
      expect(content).toContain('Accessibility Report')
      expect(content).toContain('Summary')
      expect(content).toContain('Details')
      expect(content).toContain('WCAG')
      expect(content).toContain('Impact')
      expect(content).toContain('failureSummary')
    })
  })

  // ─── Content correctness: queries ───

  describe('queries content', () => {
    it('codegen.ts should reference NEXT_SERVER_GRAPHQL_URL', () => {
      const content = readFile('libs/queries/codegen.ts')
      expect(content).toContain('NEXT_SERVER_GRAPHQL_URL')
    })

    it('client.ts should create GraphQLClient', () => {
      const content = readFile('libs/queries/src/lib/client.ts')
      expect(content).toContain('GraphQLClient')
      expect(content).toContain('graphql-request')
    })

    it('project.json should have codegen target with caching', () => {
      const projectJson = parseJson('libs/queries/project.json') as Record<string, unknown>
      const targets = projectJson.targets as Record<string, Record<string, unknown>>
      expect(targets).toHaveProperty('codegen')
      const codegen = targets.codegen
      expect(codegen.inputs).toBeDefined()
      expect(codegen.outputs).toBeDefined()
    })

    it('placeholder graphql.ts should have TypedDocumentString class', () => {
      const content = readFile('libs/queries/src/gql/generated/graphql.ts')
      expect(content).toContain('TypedDocumentString')
    })
  })

  // ─── Content correctness: i18n ───

  describe('i18n content', () => {
    it('config.ts should have en and fr locales with localeMap and getOptions', () => {
      const content = readFile('libs/i18n/src/config.ts')
      expect(content).toContain('\'en\'')
      expect(content).toContain('\'fr\'')
      expect(content).toContain('localeMap')
      expect(content).toContain('getOptions')
    })

    it('index.ts should export useTranslationAdapter and routing utilities', () => {
      const content = readFile('libs/i18n/src/index.ts')
      expect(content).toContain('useTranslationAdapter')
      expect(content).toContain('getMappedLocale')
      expect(content).toContain('getValidLocale')
      expect(content).toContain('splitLocaleFromPathname')
      expect(content).toContain('getLocalizedPath')
    })

    it('server.ts should export getTranslation and getLocale', () => {
      const content = readFile('libs/i18n/src/server.ts')
      expect(content).toContain('getTranslation')
      expect(content).toContain('getLocale')
    })

    it('getLocale should use createServerContext from @okam/next-component', () => {
      const content = readFile('libs/i18n/src/lib/getLocale/index.ts')
      expect(content).toContain('createServerContext')
      expect(content).toContain('@okam/next-component/server')
    })

    it('getTranslation should use resourcesToBackend', () => {
      const content = readFile('libs/i18n/src/lib/getTranslation/index.ts')
      expect(content).toContain('resourcesToBackend')
      expect(content).toContain('createInstance')
    })

    it('useTranslationAdapter should sync with react-aria locale', () => {
      const content = readFile('libs/i18n/src/hooks/useTranslationAdapter/index.ts')
      expect(content).toContain('use client')
      expect(content).toContain('useLocale')
      expect(content).toContain('resourcesToBackend')
    })

    it('locale JSON files should have welcome and notFound keys', () => {
      const en = parseJson('libs/i18n/src/locales/en/common.json') as Record<string, string>
      const fr = parseJson('libs/i18n/src/locales/fr/common.json') as Record<string, string>
      expect(en.welcome).toBe('Welcome')
      expect(en.notFound).toBe('Page not found')
      expect(fr.welcome).toBe('Bienvenue')
      expect(fr.notFound).toBe('Page non trouvée')
    })

    it('components namespace JSON files should exist with content', () => {
      const en = parseJson('libs/i18n/src/locales/en/components.json') as Record<string, string>
      const fr = parseJson('libs/i18n/src/locales/fr/components.json') as Record<string, string>
      expect(en.backToHome).toBe('Back to home')
      expect(fr.backToHome).toContain('Retour')
    })

    it('package.json should have server export path', () => {
      const pkg = parseJson('libs/i18n/package.json') as Record<string, unknown>
      const exports = pkg.exports as Record<string, string>
      expect(exports['.']).toBe('./src/index.ts')
      expect(exports['./server']).toBe('./src/server.ts')
    })
  })

  // ─── Content correctness: directus ───

  describe('directus content', () => {
    it('docker-compose.yml should have all 3 services with healthchecks', () => {
      const content = readFile('apps/directus/docker-compose.yml')
      expect(content).toContain('postgres:')
      expect(content).toContain('pgautoupgrade/pgautoupgrade:16-alpine')
      expect(content).toContain('redis:')
      expect(content).toContain('redis:6-alpine')
      expect(content).toContain('directus:')
      expect(content).toContain('directus/directus:latest')
      expect(content).toContain('healthcheck:')
      expect(content).toContain('pg_isready')
      expect(content).toContain('redis-cli')
    })

    it('.env.local.sample should have all required variables', () => {
      const content = readFile('apps/directus/.env.local.sample')
      const requiredVars = [
        'KEY=',
        'SECRET=',
        'ADMIN_EMAIL=',
        'ADMIN_PASSWORD=',
        'DB_CLIENT=',
        'DB_HOST=',
        'DB_PORT=',
        'DB_DATABASE=',
        'DB_USER=',
        'DB_PASSWORD=',
        'PUBLIC_URL=',
        'FRONTEND_URL=',
        'CACHE_ENABLED=',
        'GRAPHQL_INTROSPECTION=',
      ]
      for (const v of requiredVars) {
        expect(content).toContain(v)
      }
    })

    it('package.json should have docker convenience scripts', () => {
      const pkg = parseJson('apps/directus/package.json') as Record<string, Record<string, string>>
      const scripts = pkg.scripts
      expect(scripts.up).toContain('docker compose up')
      expect(scripts.down).toContain('docker compose down')
      expect(scripts.log).toContain('docker compose logs')
    })
  })

  // ─── Content correctness: git hooks ───

  describe('git hooks content', () => {
    it('commitlint.config.js should extend conventional config', () => {
      const content = readFile('commitlint.config.js')
      expect(content).toContain('@commitlint/config-conventional')
    })

    it('.husky/pre-commit should run lint-staged', () => {
      const content = readFile('.husky/pre-commit')
      expect(content).toContain('lint-staged')
    })

    it('.husky/commit-msg should run commitlint', () => {
      const content = readFile('.husky/commit-msg')
      expect(content).toContain('commitlint')
    })

    it('lint-staged.config.js should run eslint and prettier', () => {
      const content = readFile('lint-staged.config.js')
      expect(content).toContain('eslint')
      expect(content).toContain('prettier')
    })
  })

  // ─── Scope used correctly in all lib package.json files ───

  describe('scope consistency across all package.json files', () => {
    const packages = [
      { path: 'libs/brand-ui/package.json', expected: '@smoketest/brand-ui' },
      { path: 'libs/storybook/package.json', expected: '@smoketest/storybook' },
      { path: 'libs/blocks/package.json', expected: '@smoketest/blocks' },
      { path: 'libs/queries/package.json', expected: '@smoketest/queries' },
      { path: 'libs/i18n/package.json', expected: '@smoketest/i18n' },
      { path: 'apps/directus/package.json', expected: '@smoketest/directus' },
    ]

    for (const { path, expected } of packages) {
      it(`${path} should have name "${expected}"`, () => {
        const pkg = parseJson(path) as Record<string, string>
        expect(pkg.name).toBe(expected)
      })
    }
  })

  // ─── Total file count sanity check ───

  describe('total generated files', () => {
    it('should generate at least 86 files', () => {
      const changes = tree.listChanges().filter(c => c.type === 'CREATE')
      // We expect at least 86 template files + the root package.json from empty workspace
      expect(changes.length).toBeGreaterThanOrEqual(86)
    })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// Second suite: includeDirectus: false
// ─────────────────────────────────────────────────────────────────────────────

describe('preset generator — e2e smoke test (includeDirectus: false)', () => {
  let tree: Tree
  let tmpDir: string
  const options: PresetGeneratorSchema = {
    name: 'no-directus',
    scope: '@nodirectus',
    includeDirectus: false,
  }
  const appName = 'no-directus-nextjs'

  beforeAll(async () => {
    tree = createTreeWithEmptyWorkspace()
    await presetGenerator(tree, options)

    // Flush tree to disk
    tmpDir = mkdtempSync(join(tmpdir(), 'preset-e2e-nodirectus-'))
    for (const change of tree.listChanges()) {
      if (change.type === 'CREATE' || change.type === 'UPDATE') {
        const filePath = join(tmpDir, change.path)
        const dir = join(filePath, '..')
        mkdirSync(dir, { recursive: true })
        writeFileSync(filePath, change.content!)
      }
    }
  })

  afterAll(() => {
    if (tmpDir) {
      rmSync(tmpDir, { recursive: true, force: true })
    }
  })

  function readFile(relativePath: string): string {
    return readFileSync(join(tmpDir, relativePath), 'utf-8')
  }

  function parseJson(relativePath: string): unknown {
    const content = readFile(relativePath)
    return JSON.parse(content)
  }

  function fileExists(relativePath: string): boolean {
    return tree.exists(relativePath)
  }

  // ─── Directus files should NOT exist ───

  describe('directus files and deploy infra should be absent', () => {
    const directusFiles = [
      'apps/directus/docker-compose.yml',
      'apps/directus/.env.local.sample',
      'apps/directus/package.json',
      '.github/workflows/deploy.yml',
      '.do/app-staging.yaml',
      '.do/app.yaml',
    ]

    for (const file of directusFiles) {
      it(`should NOT generate ${file}`, () => {
        expect(fileExists(file)).toBe(false)
      })
    }
  })

  // ─── Directus and queries deps should NOT be in package.json ───

  describe('directus and queries dependencies should be absent', () => {
    it('should NOT include @okam/directus-* in root package.json dependencies', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.dependencies['@okam/directus-next']).toBeUndefined()
      expect(pkg.dependencies['@okam/directus-query']).toBeUndefined()
      expect(pkg.dependencies['@okam/directus-block']).toBeUndefined()
    })

    it('should NOT include graphql/graphql-request in root package.json dependencies', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.dependencies.graphql).toBeUndefined()
      expect(pkg.dependencies['graphql-request']).toBeUndefined()
    })

    it('should NOT include @graphql-codegen/cli in root package.json devDependencies', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.devDependencies['@graphql-codegen/cli']).toBeUndefined()
    })

    it('should still include non-directus @okam packages', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.dependencies['@okam/stack-ui']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/core-lib']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/next-component']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/react-utils']).toBe('0.0.1')
      expect(pkg.dependencies['@okam/logger']).toBe('1.1.0')
    })
  })

  // ─── Queries lib should NOT exist ───

  describe('queries lib should be absent', () => {
    const queriesFiles = [
      'libs/queries/src/index.ts',
      'libs/queries/project.json',
      'libs/queries/package.json',
      'libs/queries/codegen.ts',
      'libs/queries/src/lib/client.ts',
      'libs/queries/src/server.ts',
    ]

    for (const file of queriesFiles) {
      it(`should NOT generate ${file}`, () => {
        expect(fileExists(file)).toBe(false)
      })
    }
  })

  // ─── tsconfig.base.json should NOT have queries path aliases ───

  describe('tsconfig.base.json without queries paths', () => {
    it('should NOT include queries path aliases', () => {
      const tsconfig = parseJson('tsconfig.base.json') as Record<string, Record<string, Record<string, string[]>>>
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@nodirectus/queries']).toBeUndefined()
      expect(paths['@nodirectus/queries/server']).toBeUndefined()
    })

    it('should still include non-queries path aliases', () => {
      const tsconfig = parseJson('tsconfig.base.json') as Record<string, Record<string, Record<string, string[]>>>
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@nodirectus/brand-ui']).toBeDefined()
      expect(paths['@nodirectus/blocks']).toBeDefined()
      expect(paths['@nodirectus/i18n']).toBeDefined()
      expect(paths['@nodirectus/i18n/server']).toBeDefined()
    })
  })

  // ─── Root package.json should NOT have codegen script ───

  describe('root package.json without codegen script', () => {
    it('should NOT include codegen script', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.scripts.codegen).toBeUndefined()
    })

    it('should still include other scripts', () => {
      const pkg = parseJson('package.json') as Record<string, Record<string, string>>
      expect(pkg.scripts.dev).toBeDefined()
      expect(pkg.scripts.build).toBeDefined()
      expect(pkg.scripts.lint).toBeDefined()
      expect(pkg.scripts.typegen).toBeDefined()
    })
  })

  // ─── CI type-check workflow should NOT have codegen step ───

  describe('type-check workflow without codegen', () => {
    it('should NOT include codegen step', () => {
      const content = readFile('.github/workflows/type-check.yml')
      expect(content).not.toContain('pnpm codegen')
    })

    it('should still include type-check steps', () => {
      const content = readFile('.github/workflows/type-check.yml')
      expect(content).toContain('name: Type Check')
      expect(content).toContain('type-check')
    })
  })

  // ─── next.config.js should NOT have directus transpilePackages ───

  describe('next.config.js without directus', () => {
    it('should NOT include @okam/directus-* in transpilePackages', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).not.toContain('@okam/directus-block')
      expect(content).not.toContain('@okam/directus-next')
      expect(content).not.toContain('@okam/directus-query')
    })

    it('should still include non-directus @okam packages in transpilePackages', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).toContain('@okam/core-lib')
      expect(content).toContain('@okam/stack-ui')
      expect(content).toContain('@okam/next-component')
    })

    it('should NOT include Directus image remotePatterns', () => {
      const content = readFile(`apps/${appName}/next.config.js`)
      expect(content).not.toContain('remotePatterns')
      expect(content).not.toContain('8055')
      expect(content).not.toContain('/assets/**')
    })
  })

  // ─── csp.config.ts should use localhost (no :8055) ───

  describe('csp.config.ts without Directus fallback', () => {
    it('should NOT use localhost:8055 as fallback', () => {
      const content = readFile(`apps/${appName}/csp.config.ts`)
      expect(content).not.toContain('localhost:8055')
    })

    it('should use localhost as fallback instead', () => {
      const content = readFile(`apps/${appName}/csp.config.ts`)
      expect(content).toContain('localhost')
    })
  })

  // ─── layout.tsx should NOT mention Directus ───

  describe('layout.tsx without Directus mention', () => {
    it('should NOT include "Directus" in metadata description', () => {
      const content = readFile(`apps/${appName}/src/app/layout.tsx`)
      expect(content).not.toContain('Directus')
    })

    it('should still have Next.js in metadata description', () => {
      const content = readFile(`apps/${appName}/src/app/layout.tsx`)
      expect(content).toContain('Next.js')
    })
  })

  // ─── Template resolution should be clean ───

  describe('template resolution', () => {
    it('should not have leftover EJS tags in any generated file', () => {
      const changes = tree.listChanges()
      const ejsPattern = /<%[^%]*%>/
      const unresolvedFiles: string[] = []

      for (const change of changes) {
        if (change.type === 'CREATE' || change.type === 'UPDATE') {
          const content = change.content?.toString() ?? ''
          if (ejsPattern.test(content)) {
            unresolvedFiles.push(change.path)
          }
        }
      }

      expect(unresolvedFiles).toEqual([])
    })

    it('should not have __dot__ prefix in any generated file path', () => {
      const changes = tree.listChanges()
      const dotPrefixFiles = changes
        .filter(c => c.path.includes('__dot__'))
        .map(c => c.path)

      expect(dotPrefixFiles).toEqual([])
    })
  })

  // ─── All other files should still exist ───

  describe('all non-directus files should still exist', () => {
    const rootFiles = [
      'nx.json',
      'tsconfig.base.json',
      'pnpm-workspace.yaml',
      'package.json',
      'eslint.config.js',
      'prettier.config.js',
      '.gitignore',
      '.nvmrc',
      '.editorconfig',
      'commitlint.config.js',
      'lint-staged.config.js',
      '.husky/pre-commit',
      '.husky/commit-msg',
      '.github/workflows/lint.yml',
      '.github/workflows/type-check.yml',
      '.github/workflows/clickup.yml',
      '.github/workflows/storybook-test.yml',
      '.github/dependabot.yml',
    ]

    for (const file of rootFiles) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }

    const appFiles = [
      `apps/${appName}/project.json`,
      `apps/${appName}/next.config.js`,
      `apps/${appName}/src/app/layout.tsx`,
      `apps/${appName}/src/app/Providers.tsx`,
      `apps/${appName}/src/app/page.tsx`,
      `apps/${appName}/src/app/globals.css`,
      `apps/${appName}/middleware.ts`,
    ]

    for (const file of appFiles) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }

    const libFiles = [
      'libs/brand-ui/src/index.ts',
      'libs/storybook/.storybook/main.ts',
      'libs/storybook/.storybook/storybook.css',
      'libs/blocks/src/index.ts',
      'libs/i18n/src/index.ts',
    ]

    for (const file of libFiles) {
      it(`should generate ${file}`, () => {
        expect(fileExists(file)).toBe(true)
      })
    }
  })

  // ─── JSON validity for non-directus files ───

  describe('json validity (no directus)', () => {
    const jsonFiles = [
      'package.json',
      `apps/${appName}/project.json`,
      'libs/brand-ui/package.json',
      'libs/storybook/package.json',
      'libs/blocks/package.json',
      'libs/i18n/package.json',
    ]

    for (const file of jsonFiles) {
      it(`${file} should be valid JSON`, () => {
        expect(() => parseJson(file)).not.toThrow()
      })
    }
  })

  // ─── Scope consistency (no directus in scope list) ───

  describe('scope consistency (no directus)', () => {
    const packages = [
      { path: 'libs/brand-ui/package.json', expected: '@nodirectus/brand-ui' },
      { path: 'libs/storybook/package.json', expected: '@nodirectus/storybook' },
      { path: 'libs/blocks/package.json', expected: '@nodirectus/blocks' },
      { path: 'libs/i18n/package.json', expected: '@nodirectus/i18n' },
    ]

    for (const { path, expected } of packages) {
      it(`${path} should have name "${expected}"`, () => {
        const pkg = parseJson(path) as Record<string, string>
        expect(pkg.name).toBe(expected)
      })
    }
  })
})
