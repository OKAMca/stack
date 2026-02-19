#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import * as readline from 'node:readline'
import { Command } from 'commander'

const packageJsonPath = join(__dirname, '..', 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as { version: string }

async function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

function validateProjectName(name: string): boolean {
  return /^[a-z][a-z0-9-]*$/.test(name)
}

function validateScope(scope: string): boolean {
  const normalized = scope.startsWith('@') ? scope.slice(1) : scope
  return /^[a-z][a-z0-9-]*$/.test(normalized)
}

const program = new Command()

program
  .name('okam-automation')
  .description('CLI for scaffolding production-ready Nx monorepo projects')
  .version(packageJson.version)

program
  .command('project-setup')
  .description('Scaffold a new Nx monorepo with Next.js, Directus, brand-ui, blocks, queries, i18n, Storybook, and ESLint')
  .option('-n, --name <name>', 'Project name')
  .option('-s, --scope <scope>', 'npm scope prefix (e.g. @acme, @myorg)')
  .option('--no-directus', 'Skip Directus CMS setup (Docker Compose, env sample, Directus dependencies)')
  .action(async (opts: { name?: string, scope?: string, directus?: boolean }) => {
    let projectName = opts.name
    let scope = opts.scope

    if (!projectName) {
      projectName = await prompt('What is the project name? ')
    }
    if (!validateProjectName(projectName)) {
      console.error(`Error: Invalid project name "${projectName}". Must start with a lowercase letter and contain only lowercase letters, numbers, and hyphens.`)
      process.exit(1)
    }

    if (!scope) {
      scope = await prompt('What is the npm scope? (e.g. @acme, @myorg) ')
    }
    if (!validateScope(scope)) {
      console.error(`Error: Invalid scope "${scope}". Must start with a lowercase letter and contain only lowercase letters, numbers, and hyphens.`)
      process.exit(1)
    }

    const normalizedScope = scope.startsWith('@') ? scope : `@${scope}`

    console.log('')
    console.log(`Creating project "${projectName}" with scope "${normalizedScope}"...`)
    console.log('')

    const args = [
      'create-nx-workspace',
      projectName,
      `--preset=@okam/automation`,
      `--pm=pnpm`,
      `--scope=${normalizedScope}`,
      '--nxCloud=skip',
    ]

    if (opts.directus === false) {
      args.push('--includeDirectus=false')
    }

    const command = `npx ${args.join(' ')}`

    try {
      execSync(command, {
        stdio: 'inherit',
        cwd: process.cwd(),
      })
      console.log('')
      console.log(`Project "${projectName}" created successfully!`)
      console.log(`  cd ${projectName}`)
      console.log('  pnpm install')
      console.log('  pnpm dev')
    }
    catch {
      console.error('')
      console.error('Failed to create project. See output above for details.')
      process.exit(1)
    }
  })

program.parse()
