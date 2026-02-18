import type { Tree } from '@nx/devkit'
import type { PresetGeneratorSchema } from './schema'

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { beforeEach, describe, expect, it } from 'vitest'
import { presetGenerator } from './generator'

describe('preset generator', () => {
  let tree: Tree
  const options: PresetGeneratorSchema = {
    name: 'acme',
    scope: '@acme',
  }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  describe('root config', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate nx.json', () => {
      expect(tree.exists('nx.json')).toBe(true)
    })

    it('should generate tsconfig.base.json with scope aliases', () => {
      expect(tree.exists('tsconfig.base.json')).toBe(true)
      const tsconfig = JSON.parse(tree.read('tsconfig.base.json', 'utf-8')!)
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@acme/brand-ui']).toEqual(['libs/brand-ui/src/index.ts'])
      expect(paths['@acme/blocks']).toEqual(['libs/blocks/src/index.ts'])
      expect(paths['@acme/queries']).toEqual(['libs/queries/src/index.ts'])
      expect(paths['@acme/queries/server']).toEqual(['libs/queries/src/server.ts'])
      expect(paths['@acme/i18n']).toEqual(['libs/i18n/src/index.ts'])
      expect(paths['@acme/i18n/server']).toEqual(['libs/i18n/src/server.ts'])
    })

    it('should generate tsconfig.base.json with strict mode enabled', () => {
      const tsconfig = JSON.parse(tree.read('tsconfig.base.json', 'utf-8')!)
      expect(tsconfig.compilerOptions.strict).toBe(true)
      expect(tsconfig.compilerOptions.moduleResolution).toBe('bundler')
      expect(tsconfig.compilerOptions.target).toBe('es2022')
    })

    it('should generate pnpm-workspace.yaml', () => {
      expect(tree.exists('pnpm-workspace.yaml')).toBe(true)
      const content = tree.read('pnpm-workspace.yaml', 'utf-8')!
      expect(content).toContain('apps/*')
      expect(content).toContain('libs/*')
    })

    it('should generate package.json with scope and scripts', () => {
      expect(tree.exists('package.json')).toBe(true)
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/source')
      expect(pkg.private).toBe(true)
      expect(pkg.scripts.dev).toContain('acme-nextjs')
      expect(pkg.scripts.build).toContain('acme-nextjs')
      expect(pkg.scripts.lint).toBe('nx run-many -t lint')
      expect(pkg.scripts.prepare).toBe('husky')
      expect(pkg.packageManager).toBe('pnpm@10.10.0')
    })

    it('should generate eslint.config.js', () => {
      expect(tree.exists('eslint.config.js')).toBe(true)
      const content = tree.read('eslint.config.js', 'utf-8')!
      expect(content).toContain('@antfu/eslint-config')
    })

    it('should generate prettier.config.js', () => {
      expect(tree.exists('prettier.config.js')).toBe(true)
    })

    it('should generate .gitignore', () => {
      expect(tree.exists('.gitignore')).toBe(true)
      const content = tree.read('.gitignore', 'utf-8')!
      expect(content).toContain('node_modules')
      expect(content).toContain('.next')
      expect(content).toContain('dist')
    })

    it('should generate .nvmrc with node 24', () => {
      expect(tree.exists('.nvmrc')).toBe(true)
      const content = tree.read('.nvmrc', 'utf-8')!
      expect(content).toContain('24')
    })

    it('should generate .editorconfig', () => {
      expect(tree.exists('.editorconfig')).toBe(true)
      const content = tree.read('.editorconfig', 'utf-8')!
      expect(content).toContain('indent_size = 2')
      expect(content).toContain('utf-8')
    })

    it('should add all pinned dependencies to package.json', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      // Core deps
      expect(pkg.dependencies.next).toBe('16.1.2')
      expect(pkg.dependencies.react).toBe('19.2.3')
      expect(pkg.dependencies['react-dom']).toBe('19.2.3')
      expect(pkg.dependencies.typescript).toBe('5.9.3')
      // Styling
      expect(pkg.dependencies.tailwindcss).toBe('4.1.18')
      // Okam packages
      expect(pkg.dependencies['@okam/stack-ui']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/directus-next']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/directus-query']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/directus-block']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/core-lib']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/next-component']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/react-utils']).toBe('0.0.1')
      expect(pkg.dependencies['@okam/logger']).toBe('1.1.0')
      // i18n
      expect(pkg.dependencies.i18next).toBe('25.3.2')
      expect(pkg.dependencies['react-i18next']).toBe('15.6.0')
      expect(pkg.dependencies['i18next-resources-to-backend']).toBe('1.2.1')
      // Data
      expect(pkg.dependencies['@tanstack/react-query']).toBe('5.90.20')
      // Dev deps
      expect(pkg.devDependencies.nx).toBe('22.3.3')
      expect(pkg.devDependencies.eslint).toBe('9.39.2')
      expect(pkg.devDependencies.storybook).toBe('10.1.11')
      expect(pkg.devDependencies['@storybook/react']).toBe('10.1.11')
      expect(pkg.devDependencies['@storybook/addon-a11y']).toBe('10.1.11')
      expect(pkg.devDependencies['@storybook/addon-docs']).toBe('10.1.11')
      expect(pkg.devDependencies['@storybook/test-runner']).toBe('0.24.2')
      expect(pkg.devDependencies['axe-playwright']).toBe('2.2.2')
      expect(pkg.devDependencies.husky).toBe('9.1.7')
      expect(pkg.devDependencies['@graphql-codegen/cli']).toBe('6.1.1')
      // Vite dev deps
      expect(pkg.devDependencies.vite).toBe('6.4.1')
      expect(pkg.devDependencies['@vitejs/plugin-react']).toBe('4.7.0')
      expect(pkg.devDependencies['vite-plugin-dts']).toBe('4.5.4')
      expect(pkg.devDependencies['vite-tsconfig-paths']).toBe('5.1.4')
    })
  })

  describe('next.js app', () => {
    const appDir = 'apps/acme-nextjs'

    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate project.json with build/serve/lint/type-check targets', () => {
      const projPath = `${appDir}/project.json`
      expect(tree.exists(projPath)).toBe(true)
      const project = JSON.parse(tree.read(projPath, 'utf-8')!)
      expect(project.targets.build.executor).toBe('@nx/next:build')
      expect(project.targets.serve.executor).toBe('@nx/next:server')
      expect(project.targets.lint.executor).toBe('@nx/eslint:lint')
      expect(project.targets['type-check']).toBeDefined()
    })

    it('should include root config files in lint target lintFilePatterns', () => {
      const projPath = `${appDir}/project.json`
      const project = JSON.parse(tree.read(projPath, 'utf-8')!)
      const patterns = project.targets.lint.options.lintFilePatterns
      expect(patterns).toContain('package.json')
      expect(patterns).toContain('tsconfig.base.json')
      expect(patterns).toContain('nx.json')
    })

    it('should generate next.config.js with security headers', () => {
      const configPath = `${appDir}/next.config.js`
      expect(tree.exists(configPath)).toBe(true)
      const content = tree.read(configPath, 'utf-8')!
      expect(content).toContain('X-Frame-Options')
      expect(content).toContain('X-Content-Type-Options')
      expect(content).toContain('Strict-Transport-Security')
      expect(content).toContain('Referrer-Policy')
    })

    it('should generate csp.config.ts', () => {
      expect(tree.exists(`${appDir}/csp.config.ts`)).toBe(true)
      const content = tree.read(`${appDir}/csp.config.ts`, 'utf-8')!
      expect(content).toContain('buildCsp')
      expect(content).toContain('default-src')
    })

    it('should generate globals.css with Tailwind v4 @import and @source directives', () => {
      expect(tree.exists(`${appDir}/src/app/globals.css`)).toBe(true)
      const content = tree.read(`${appDir}/src/app/globals.css`, 'utf-8')!
      expect(content).toContain('@import \'tailwindcss\'')
      expect(content).toContain('@source')
      expect(content).toContain('brand-ui')
      expect(content).toContain('blocks')
    })

    it('should not generate v3 tailwind.config.js', () => {
      expect(tree.exists(`${appDir}/tailwind.config.js`)).toBe(false)
    })

    it('should import globals.css in layout.tsx', () => {
      const content = tree.read(`${appDir}/src/app/layout.tsx`, 'utf-8')!
      expect(content).toContain('import \'./globals.css\'')
    })

    it('should generate tsconfig.json extending base without react/experimental', () => {
      expect(tree.exists(`${appDir}/tsconfig.json`)).toBe(true)
      const tsconfig = JSON.parse(tree.read(`${appDir}/tsconfig.json`, 'utf-8')!)
      expect(tsconfig.extends).toBe('../../tsconfig.base.json')
      // react/experimental types don't exist in React 19 stable
      expect(tsconfig.compilerOptions.types).toBeUndefined()
    })

    it('should generate public/.gitkeep directory placeholder', () => {
      expect(tree.exists(`${appDir}/public/.gitkeep`)).toBe(true)
    })

    it('should generate layout.tsx with getLocale from i18n/server', () => {
      expect(tree.exists(`${appDir}/src/app/layout.tsx`)).toBe(true)
      const content = tree.read(`${appDir}/src/app/layout.tsx`, 'utf-8')!
      expect(content).toContain('getLocale')
      expect(content).toContain('@acme/i18n/server')
    })

    it('should generate Providers.tsx with ThemeProvider, I18nProvider, and TranslationContextProvider', () => {
      expect(tree.exists(`${appDir}/src/app/Providers.tsx`)).toBe(true)
      const content = tree.read(`${appDir}/src/app/Providers.tsx`, 'utf-8')!
      expect(content).toContain('use client')
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('@acme/brand-ui')
      expect(content).toContain('QueryClientProvider')
      expect(content).toContain('I18nProvider')
      expect(content).toContain('TranslationContextProvider')
      expect(content).toContain('useTranslationAdapter')
    })

    it('should generate page.tsx', () => {
      expect(tree.exists(`${appDir}/src/app/page.tsx`)).toBe(true)
    })

    it('should generate not-found.tsx', () => {
      expect(tree.exists(`${appDir}/src/app/not-found.tsx`)).toBe(true)
    })

    it('should generate env.ts with zod schemas', () => {
      expect(tree.exists(`${appDir}/src/lib/env.ts`)).toBe(true)
      const content = tree.read(`${appDir}/src/lib/env.ts`, 'utf-8')!
      expect(content).toContain('createEnv')
      expect(content).toContain('NEXT_SERVER_GRAPHQL_URL')
      expect(content).toContain('skipValidation')
    })

    it('should generate middleware.ts using i18n lib utilities', () => {
      expect(tree.exists(`${appDir}/middleware.ts`)).toBe(true)
      const content = tree.read(`${appDir}/middleware.ts`, 'utf-8')!
      expect(content).toContain('middleware')
      expect(content).toContain('splitLocaleFromPathname')
      expect(content).toContain('getValidLocale')
      expect(content).toContain('getLocalizedPath')
      expect(content).toContain('@acme/i18n')
    })
  })

  describe('brand-ui library', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate index.ts re-exporting stack-ui and ThemeProvider with theme.css import', () => {
      expect(tree.exists('libs/brand-ui/src/index.ts')).toBe(true)
      const content = tree.read('libs/brand-ui/src/index.ts', 'utf-8')!
      expect(content).toContain('export * from \'@okam/stack-ui\'')
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('./theme')
      expect(content).toContain('import \'./theme.css\'')
    })

    it('should generate theme with makeTheme and createThemeProvider', () => {
      expect(tree.exists('libs/brand-ui/src/theme/index.tsx')).toBe(true)
      const content = tree.read('libs/brand-ui/src/theme/index.tsx', 'utf-8')!
      expect(content).toContain('use client')
      expect(content).toContain('makeTheme')
      expect(content).toContain('createThemeProvider')
      expect(content).toContain('tv')
      expect(content).toContain('tailwind-variants')
      expect(content).toContain('typography')
      expect(content).toContain('button')
    })

    it('should not have the old providers/Theme directory', () => {
      expect(tree.exists('libs/brand-ui/src/providers/Theme/index.tsx')).toBe(false)
    })

    it('should generate theme.css with Tailwind v4 @theme block', () => {
      expect(tree.exists('libs/brand-ui/src/theme.css')).toBe(true)
      const content = tree.read('libs/brand-ui/src/theme.css', 'utf-8')!
      expect(content).toContain('@theme')
      expect(content).toContain('--color-primary')
      expect(content).toContain('--color-secondary')
      expect(content).toContain('--font-sans')
      expect(content).toContain('--font-heading')
    })

    it('should not have v3 tailwind.config.js', () => {
      expect(tree.exists('libs/brand-ui/tailwind.config.js')).toBe(false)
    })

    it('should generate vite.config.ts that externalizes react, stack-ui, and tailwind-variants', () => {
      expect(tree.exists('libs/brand-ui/vite.config.ts')).toBe(true)
      const content = tree.read('libs/brand-ui/vite.config.ts', 'utf-8')!
      expect(content).toContain('react')
      expect(content).toContain('react-dom')
      expect(content).toContain('@okam/stack-ui')
      expect(content).toContain('tailwind-variants')
      expect(content).toContain('preserveModules')
    })

    it('should generate project.json with build and lint targets', () => {
      expect(tree.exists('libs/brand-ui/project.json')).toBe(true)
      const project = JSON.parse(tree.read('libs/brand-ui/project.json', 'utf-8')!)
      expect(project.targets.build).toBeDefined()
      expect(project.targets.lint).toBeDefined()
    })

    it('should generate package.json with scope', () => {
      expect(tree.exists('libs/brand-ui/package.json')).toBe(true)
      const pkg = JSON.parse(tree.read('libs/brand-ui/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/brand-ui')
    })

    it('should generate components .gitkeep', () => {
      expect(tree.exists('libs/brand-ui/src/components/.gitkeep')).toBe(true)
    })
  })

  describe('storybook library', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate main.ts with correct story globs and Storybook 10 addons', () => {
      expect(tree.exists('libs/storybook/.storybook/main.ts')).toBe(true)
      const content = tree.read('libs/storybook/.storybook/main.ts', 'utf-8')!
      expect(content).toContain('brand-ui/**/*.stories')
      expect(content).toContain('blocks/**/*.stories')
      expect(content).toContain('@storybook/nextjs-vite')
      expect(content).toContain('@storybook/addon-a11y')
      expect(content).toContain('@storybook/addon-docs')
      expect(content).not.toContain('addon-essentials')
    })

    it('should generate preview.tsx with ThemeProvider decorator and storybook.css import', () => {
      expect(tree.exists('libs/storybook/.storybook/preview.tsx')).toBe(true)
      const content = tree.read('libs/storybook/.storybook/preview.tsx', 'utf-8')!
      expect(content).toContain('ThemeProvider')
      expect(content).toContain('@acme/brand-ui')
      expect(content).toContain('layout')
      expect(content).toContain('./storybook.css')
    })

    it('should generate storybook.css with Tailwind v4 directives and brand-ui theme import', () => {
      expect(tree.exists('libs/storybook/.storybook/storybook.css')).toBe(true)
      const content = tree.read('libs/storybook/.storybook/storybook.css', 'utf-8')!
      expect(content).toContain('@import \'tailwindcss\'')
      expect(content).toContain('brand-ui/src/theme.css')
      expect(content).toContain('@source')
      expect(content).toContain('brand-ui')
      expect(content).toContain('blocks')
    })

    it('should generate project.json with storybook targets', () => {
      expect(tree.exists('libs/storybook/project.json')).toBe(true)
      const project = JSON.parse(tree.read('libs/storybook/project.json', 'utf-8')!)
      expect(project.targets.storybook).toBeDefined()
      expect(project.targets['build-storybook']).toBeDefined()
    })

    it('should generate project.json with test-storybook target', () => {
      const project = JSON.parse(tree.read('libs/storybook/project.json', 'utf-8')!)
      expect(project.targets['test-storybook']).toBeDefined()
      expect(project.targets['test-storybook'].executor).toBe('nx:run-commands')
      expect(project.targets['test-storybook'].options.command).toContain('test-storybook')
    })

    it('should generate test-runner.ts with axe-playwright a11y testing', () => {
      expect(tree.exists('libs/storybook/.storybook/test-runner.ts')).toBe(true)
      const content = tree.read('libs/storybook/.storybook/test-runner.ts', 'utf-8')!
      expect(content).toContain('@storybook/test-runner')
      expect(content).toContain('axe-playwright')
      expect(content).toContain('injectAxe')
      expect(content).toContain('getViolations')
      expect(content).toContain('getHttpHeaders')
      expect(content).toContain('preVisit')
      expect(content).toContain('postVisit')
      expect(content).toContain('VERCEL_AUTOMATION_BYPASS_SECRET')
    })

    it('should generate reports/.gitkeep directory placeholder', () => {
      expect(tree.exists('libs/storybook/reports/.gitkeep')).toBe(true)
    })

    it('should generate merge-reports.js helper script', () => {
      expect(tree.exists('libs/storybook/merge-reports.js')).toBe(true)
      const content = tree.read('libs/storybook/merge-reports.js', 'utf-8')!
      expect(content).toContain('reportsDir')
      expect(content).toContain('violations-report.json')
      expect(content).toContain('.json')
    })

    it('should generate axe-to-markdown.js helper script', () => {
      expect(tree.exists('libs/storybook/axe-to-markdown.js')).toBe(true)
      const content = tree.read('libs/storybook/axe-to-markdown.js', 'utf-8')!
      expect(content).toContain('formatWcagTag')
      expect(content).toContain('Accessibility Report')
      expect(content).toContain('Summary')
      expect(content).toContain('Details')
    })

    it('should generate package.json with scope', () => {
      expect(tree.exists('libs/storybook/package.json')).toBe(true)
      const pkg = JSON.parse(tree.read('libs/storybook/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/storybook')
    })

    it('should generate tsconfig.json', () => {
      expect(tree.exists('libs/storybook/tsconfig.json')).toBe(true)
    })
  })

  describe('blocks library', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate index.ts with empty export', () => {
      expect(tree.exists('libs/blocks/src/index.ts')).toBe(true)
      const content = tree.read('libs/blocks/src/index.ts', 'utf-8')!
      expect(content).toContain('export {}')
    })

    it('should generate project.json with lint target', () => {
      expect(tree.exists('libs/blocks/project.json')).toBe(true)
      const project = JSON.parse(tree.read('libs/blocks/project.json', 'utf-8')!)
      expect(project.targets.lint).toBeDefined()
    })

    it('should generate package.json with scope', () => {
      expect(tree.exists('libs/blocks/package.json')).toBe(true)
      const pkg = JSON.parse(tree.read('libs/blocks/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/blocks')
    })

    it('should generate blocks and configs .gitkeep dirs', () => {
      expect(tree.exists('libs/blocks/src/blocks/.gitkeep')).toBe(true)
      expect(tree.exists('libs/blocks/src/configs/.gitkeep')).toBe(true)
    })

    it('should generate tsconfig files', () => {
      expect(tree.exists('libs/blocks/tsconfig.json')).toBe(true)
      expect(tree.exists('libs/blocks/tsconfig.lib.json')).toBe(true)
    })
  })

  describe('queries library', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate codegen.ts with env var reference', () => {
      expect(tree.exists('libs/queries/codegen.ts')).toBe(true)
      const content = tree.read('libs/queries/codegen.ts', 'utf-8')!
      expect(content).toContain('NEXT_SERVER_GRAPHQL_URL')
    })

    it('should generate client.ts with GraphQLClient', () => {
      expect(tree.exists('libs/queries/src/lib/client.ts')).toBe(true)
      const content = tree.read('libs/queries/src/lib/client.ts', 'utf-8')!
      expect(content).toContain('GraphQLClient')
    })

    it('should generate project.json with codegen target', () => {
      expect(tree.exists('libs/queries/project.json')).toBe(true)
      const project = JSON.parse(tree.read('libs/queries/project.json', 'utf-8')!)
      expect(project.targets.codegen).toBeDefined()
      expect(project.targets.codegen.executor).toBe('nx:run-commands')
      expect(project.targets.codegen.cache).toBe(true)
    })

    it('should generate index.ts with barrel exports', () => {
      expect(tree.exists('libs/queries/src/index.ts')).toBe(true)
    })

    it('should generate server.ts for server-side exports', () => {
      expect(tree.exists('libs/queries/src/server.ts')).toBe(true)
    })

    it('should generate placeholder graphql.ts for pre-codegen compilation', () => {
      expect(tree.exists('libs/queries/src/gql/generated/graphql.ts')).toBe(true)
      const content = tree.read('libs/queries/src/gql/generated/graphql.ts', 'utf-8')!
      expect(content).toContain('TypedDocumentString')
    })

    it('should generate .gitkeep directories', () => {
      expect(tree.exists('libs/queries/src/gql/.gitkeep')).toBe(true)
      expect(tree.exists('libs/queries/src/graphql/.gitkeep')).toBe(true)
    })

    it('should generate package.json with scope', () => {
      const pkg = JSON.parse(tree.read('libs/queries/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/queries')
    })
  })

  describe('i18n library', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate config.ts with localeMap and getOptions', () => {
      expect(tree.exists('libs/i18n/src/config.ts')).toBe(true)
      const content = tree.read('libs/i18n/src/config.ts', 'utf-8')!
      expect(content).toContain('\'en\'')
      expect(content).toContain('\'fr\'')
      expect(content).toContain('SupportedLocale')
      expect(content).toContain('defaultLocale')
      expect(content).toContain('localeMap')
      expect(content).toContain('getOptions')
    })

    it('should generate index.ts with useTranslationAdapter and routing utilities', () => {
      expect(tree.exists('libs/i18n/src/index.ts')).toBe(true)
      const content = tree.read('libs/i18n/src/index.ts', 'utf-8')!
      expect(content).toContain('useTranslationAdapter')
      expect(content).toContain('getMappedLocale')
      expect(content).toContain('getValidLocale')
      expect(content).toContain('splitLocaleFromPathname')
      expect(content).toContain('getLocalizedPath')
    })

    it('should generate server.ts with getTranslation and getLocale', () => {
      expect(tree.exists('libs/i18n/src/server.ts')).toBe(true)
      const content = tree.read('libs/i18n/src/server.ts', 'utf-8')!
      expect(content).toContain('getTranslation')
      expect(content).toContain('getLocale')
    })

    it('should generate locale JSON files for common and components namespaces', () => {
      expect(tree.exists('libs/i18n/src/locales/en/common.json')).toBe(true)
      expect(tree.exists('libs/i18n/src/locales/fr/common.json')).toBe(true)
      expect(tree.exists('libs/i18n/src/locales/en/components.json')).toBe(true)
      expect(tree.exists('libs/i18n/src/locales/fr/components.json')).toBe(true)

      const en = JSON.parse(tree.read('libs/i18n/src/locales/en/common.json', 'utf-8')!)
      expect(en.welcome).toBe('Welcome')
      expect(en.notFound).toBe('Page not found')

      const fr = JSON.parse(tree.read('libs/i18n/src/locales/fr/common.json', 'utf-8')!)
      expect(fr.welcome).toBe('Bienvenue')
      expect(fr.notFound).toBe('Page non trouvée')
    })

    it('should generate all lib module files', () => {
      expect(tree.exists('libs/i18n/src/lib/getLocale/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/lib/getTranslation/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/lib/getValidLocale/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/lib/getMappedLocale/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/lib/splitLocaleFromPathname/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/lib/getLocalizedPath/index.ts')).toBe(true)
    })

    it('should generate useTranslationAdapter hook', () => {
      expect(tree.exists('libs/i18n/src/hooks/useTranslationAdapter/index.ts')).toBe(true)
      const content = tree.read('libs/i18n/src/hooks/useTranslationAdapter/index.ts', 'utf-8')!
      expect(content).toContain('use client')
      expect(content).toContain('useTranslationAdapter')
      expect(content).toContain('resourcesToBackend')
      expect(content).toContain('useLocale')
    })

    it('should generate project.json with lint target', () => {
      expect(tree.exists('libs/i18n/project.json')).toBe(true)
      const project = JSON.parse(tree.read('libs/i18n/project.json', 'utf-8')!)
      expect(project.targets.lint).toBeDefined()
    })

    it('should generate package.json with scope and server export', () => {
      const pkg = JSON.parse(tree.read('libs/i18n/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/i18n')
      expect(pkg.exports['.']).toBe('./src/index.ts')
      expect(pkg.exports['./server']).toBe('./src/server.ts')
    })
  })

  describe('directus app', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate docker-compose.yml with 3 services', () => {
      expect(tree.exists('apps/directus/docker-compose.yml')).toBe(true)
      const content = tree.read('apps/directus/docker-compose.yml', 'utf-8')!
      expect(content).toContain('postgres')
      expect(content).toContain('redis')
      expect(content).toContain('directus')
    })

    it('should generate .env.local.sample with required vars', () => {
      expect(tree.exists('apps/directus/.env.local.sample')).toBe(true)
      const content = tree.read('apps/directus/.env.local.sample', 'utf-8')!
      expect(content).toContain('DB_CLIENT')
      expect(content).toContain('DB_HOST')
      expect(content).toContain('KEY')
      expect(content).toContain('SECRET')
      expect(content).toContain('ADMIN_EMAIL')
      expect(content).toContain('GRAPHQL_INTROSPECTION')
    })

    it('should generate package.json with docker scripts', () => {
      expect(tree.exists('apps/directus/package.json')).toBe(true)
      const pkg = JSON.parse(tree.read('apps/directus/package.json', 'utf-8')!)
      expect(pkg.name).toBe('@acme/directus')
      expect(pkg.scripts.up).toContain('docker compose up')
      expect(pkg.scripts.down).toContain('docker compose down')
    })
  })

  describe('git hooks', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate commitlint.config.js extending conventional', () => {
      expect(tree.exists('commitlint.config.js')).toBe(true)
      const content = tree.read('commitlint.config.js', 'utf-8')!
      expect(content).toContain('@commitlint/config-conventional')
    })

    it('should generate husky pre-commit hook', () => {
      expect(tree.exists('.husky/pre-commit')).toBe(true)
      const content = tree.read('.husky/pre-commit', 'utf-8')!
      expect(content).toContain('lint-staged')
    })

    it('should generate husky commit-msg hook', () => {
      expect(tree.exists('.husky/commit-msg')).toBe(true)
      const content = tree.read('.husky/commit-msg', 'utf-8')!
      expect(content).toContain('commitlint')
    })

    it('should generate lint-staged.config.js', () => {
      expect(tree.exists('lint-staged.config.js')).toBe(true)
      const content = tree.read('lint-staged.config.js', 'utf-8')!
      expect(content).toContain('eslint')
      expect(content).toContain('prettier')
    })
  })

  describe('ci workflows', () => {
    beforeEach(async () => {
      await presetGenerator(tree, options)
    })

    it('should generate lint workflow', () => {
      expect(tree.exists('.github/workflows/lint.yml')).toBe(true)
      const content = tree.read('.github/workflows/lint.yml', 'utf-8')!
      expect(content).toContain('lint')
      expect(content).toContain('pnpm')
    })

    it('should generate type-check workflow', () => {
      expect(tree.exists('.github/workflows/type-check.yml')).toBe(true)
      const content = tree.read('.github/workflows/type-check.yml', 'utf-8')!
      expect(content).toContain('type-check')
      expect(content).toContain('codegen')
    })

    it('should generate clickup workflow', () => {
      expect(tree.exists('.github/workflows/clickup.yml')).toBe(true)
      const content = tree.read('.github/workflows/clickup.yml', 'utf-8')!
      expect(content).toContain('CLICKUP_API_TOKEN')
    })

    it('should generate dependabot config', () => {
      expect(tree.exists('.github/dependabot.yml')).toBe(true)
      const content = tree.read('.github/dependabot.yml', 'utf-8')!
      expect(content).toContain('npm')
    })

    it('should generate storybook-test workflow', () => {
      expect(tree.exists('.github/workflows/storybook-test.yml')).toBe(true)
      const content = tree.read('.github/workflows/storybook-test.yml', 'utf-8')!
      expect(content).toContain('deployment_status')
      expect(content).toContain('test-storybook')
      expect(content).toContain('merge-reports')
      expect(content).toContain('axe-to-markdown')
      expect(content).toContain('VERCEL_AUTOMATION_BYPASS_SECRET')
      expect(content).toContain('storybook-a11y-report')
    })

    it('should generate deploy workflow with 4 jobs', () => {
      expect(tree.exists('.github/workflows/deploy.yml')).toBe(true)
      const content = tree.read('.github/workflows/deploy.yml', 'utf-8')!
      expect(content).toContain('workflow_dispatch')
      expect(content).toContain('create-staging')
      expect(content).toContain('deploy-staging')
      expect(content).toContain('create-production')
      expect(content).toContain('deploy-production')
      expect(content).toContain('digitalocean/app_action/deploy@v2')
      expect(content).toContain('DIGITALOCEAN_ACCESS_TOKEN')
      expect(content).toContain('envsubst')
      expect(content).toContain('acme-staging')
      expect(content).toContain('acme-production')
    })

    it('should generate .do/app-staging.yaml with staging config', () => {
      expect(tree.exists('.do/app-staging.yaml')).toBe(true)
      const content = tree.read('.do/app-staging.yaml', 'utf-8')!
      expect(content).toContain('acme-staging')
      expect(content).toContain('apps-s-1vcpu-1gb')
      expect(content).toContain('production: false')
      expect(content).toContain('acme-staging-db')
      expect(content).toContain('acme-staging-redis')
      expect(content).toContain('LOG_LEVEL')
      expect(content).toContain('debug')
      expect(content).toContain('/server/health')
    })

    it('should generate .do/app.yaml with production config', () => {
      expect(tree.exists('.do/app.yaml')).toBe(true)
      const content = tree.read('.do/app.yaml', 'utf-8')!
      expect(content).toContain('acme-production')
      expect(content).toContain('apps-s-1vcpu-2gb')
      expect(content).toContain('production: true')
      expect(content).toContain('acme-production-db')
      expect(content).toContain('acme-production-redis')
      expect(content).toContain('warn')
    })
  })

  describe('scope normalization', () => {
    it('should handle scope without @ prefix', async () => {
      await presetGenerator(tree, { name: 'test', scope: 'myorg' })
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.name).toBe('@myorg/source')

      const tsconfig = JSON.parse(tree.read('tsconfig.base.json', 'utf-8')!)
      expect(tsconfig.compilerOptions.paths['@myorg/brand-ui']).toBeDefined()
    })

    it('should handle scope with @ prefix', async () => {
      await presetGenerator(tree, { name: 'test', scope: '@myorg' })
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.name).toBe('@myorg/source')
    })
  })

  describe('app name derivation', () => {
    it('should derive appName as projectName-nextjs', async () => {
      await presetGenerator(tree, { name: 'hello', scope: '@test' })
      expect(tree.exists('apps/hello-nextjs/project.json')).toBe(true)
      const project = JSON.parse(tree.read('apps/hello-nextjs/project.json', 'utf-8')!)
      expect(project.name).toBe('hello-nextjs')
    })
  })

  describe('when includeDirectus is false', () => {
    const noDirectusOptions: PresetGeneratorSchema = {
      name: 'acme',
      scope: '@acme',
      includeDirectus: false,
    }

    beforeEach(async () => {
      await presetGenerator(tree, noDirectusOptions)
    })

    it('should NOT generate apps/directus directory', () => {
      expect(tree.exists('apps/directus/docker-compose.yml')).toBe(false)
      expect(tree.exists('apps/directus/.env.local.sample')).toBe(false)
      expect(tree.exists('apps/directus/package.json')).toBe(false)
    })

    it('should NOT include @okam/directus-* in root package.json dependencies', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.dependencies['@okam/directus-next']).toBeUndefined()
      expect(pkg.dependencies['@okam/directus-query']).toBeUndefined()
      expect(pkg.dependencies['@okam/directus-block']).toBeUndefined()
    })

    it('should NOT include @okam/directus-* in next.config.js transpilePackages', () => {
      const content = tree.read('apps/acme-nextjs/next.config.js', 'utf-8')!
      expect(content).not.toContain('@okam/directus-block')
      expect(content).not.toContain('@okam/directus-next')
      expect(content).not.toContain('@okam/directus-query')
    })

    it('should NOT generate queries lib directory', () => {
      expect(tree.exists('libs/queries/src/index.ts')).toBe(false)
      expect(tree.exists('libs/queries/project.json')).toBe(false)
      expect(tree.exists('libs/queries/package.json')).toBe(false)
      expect(tree.exists('libs/queries/codegen.ts')).toBe(false)
      expect(tree.exists('libs/queries/src/lib/client.ts')).toBe(false)
    })

    it('should NOT include graphql/graphql-request in root package.json dependencies', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.dependencies.graphql).toBeUndefined()
      expect(pkg.dependencies['graphql-request']).toBeUndefined()
    })

    it('should NOT include @graphql-codegen/cli in root package.json devDependencies', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.devDependencies['@graphql-codegen/cli']).toBeUndefined()
    })

    it('should NOT include queries path aliases in tsconfig.base.json', () => {
      const tsconfig = JSON.parse(tree.read('tsconfig.base.json', 'utf-8')!)
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@acme/queries']).toBeUndefined()
      expect(paths['@acme/queries/server']).toBeUndefined()
    })

    it('should still include non-queries path aliases in tsconfig.base.json', () => {
      const tsconfig = JSON.parse(tree.read('tsconfig.base.json', 'utf-8')!)
      const paths = tsconfig.compilerOptions.paths
      expect(paths['@acme/brand-ui']).toBeDefined()
      expect(paths['@acme/blocks']).toBeDefined()
      expect(paths['@acme/i18n']).toBeDefined()
      expect(paths['@acme/i18n/server']).toBeDefined()
    })

    it('should NOT include codegen script in root package.json', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.scripts.codegen).toBeUndefined()
    })

    it('should still include non-directus @okam packages in dependencies', () => {
      const pkg = JSON.parse(tree.read('package.json', 'utf-8')!)
      expect(pkg.dependencies['@okam/stack-ui']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/core-lib']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/next-component']).toBe('2.0.0')
      expect(pkg.dependencies['@okam/react-utils']).toBe('0.0.1')
      expect(pkg.dependencies['@okam/logger']).toBe('1.1.0')
    })

    it('should still include non-directus @okam packages in next.config.js transpilePackages', () => {
      const content = tree.read('apps/acme-nextjs/next.config.js', 'utf-8')!
      expect(content).toContain('@okam/core-lib')
      expect(content).toContain('@okam/stack-ui')
      expect(content).toContain('@okam/next-component')
    })

    it('should NOT include Directus image remotePatterns in next.config.js', () => {
      const content = tree.read('apps/acme-nextjs/next.config.js', 'utf-8')!
      expect(content).not.toContain('remotePatterns')
      expect(content).not.toContain('8055')
      expect(content).not.toContain('/assets/**')
    })

    it('should still generate all root config files', () => {
      expect(tree.exists('nx.json')).toBe(true)
      expect(tree.exists('tsconfig.base.json')).toBe(true)
      expect(tree.exists('pnpm-workspace.yaml')).toBe(true)
      expect(tree.exists('package.json')).toBe(true)
      expect(tree.exists('eslint.config.js')).toBe(true)
      expect(tree.exists('.gitignore')).toBe(true)
      expect(tree.exists('.editorconfig')).toBe(true)
      expect(tree.exists('commitlint.config.js')).toBe(true)
      expect(tree.exists('.husky/pre-commit')).toBe(true)
    })

    it('should still generate the Next.js app', () => {
      expect(tree.exists('apps/acme-nextjs/project.json')).toBe(true)
      expect(tree.exists('apps/acme-nextjs/next.config.js')).toBe(true)
      expect(tree.exists('apps/acme-nextjs/src/app/layout.tsx')).toBe(true)
    })

    it('should still generate all non-queries library directories', () => {
      expect(tree.exists('libs/brand-ui/src/index.ts')).toBe(true)
      expect(tree.exists('libs/storybook/.storybook/main.ts')).toBe(true)
      expect(tree.exists('libs/blocks/src/index.ts')).toBe(true)
      expect(tree.exists('libs/i18n/src/index.ts')).toBe(true)
    })

    it('should still generate CI workflows', () => {
      expect(tree.exists('.github/workflows/lint.yml')).toBe(true)
      expect(tree.exists('.github/workflows/type-check.yml')).toBe(true)
      expect(tree.exists('.github/workflows/clickup.yml')).toBe(true)
      expect(tree.exists('.github/workflows/storybook-test.yml')).toBe(true)
      expect(tree.exists('.github/dependabot.yml')).toBe(true)
    })

    it('should NOT generate deploy workflow', () => {
      expect(tree.exists('.github/workflows/deploy.yml')).toBe(false)
    })

    it('should NOT generate .do/ App Platform specs', () => {
      expect(tree.exists('.do/app-staging.yaml')).toBe(false)
      expect(tree.exists('.do/app.yaml')).toBe(false)
    })
  })
})
