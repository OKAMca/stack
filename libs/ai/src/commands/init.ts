import type { Command } from 'commander'
import * as fs from 'node:fs'
import * as path from 'node:path'

const PRD_TEMPLATE = {
  project: '',
  goal: '',
  config: {
    agent: 'claude',
    context: '',
    verification: 'Run your tests and type checks.',
  },
  statuses: ['pending', 'in_progress', 'completed', 'blocked'],
  tasks: [
    {
      id: '1',
      description: '',
      status: 'pending',
      steps: [],
    },
  ],
}

const PROGRESS_TEMPLATE = `# Progress Log

Created: ${new Date().toISOString().split('T')[0]}

## Goal

[Describe the project goal here]

---

`

export function registerInitCommand(program: Command): void {
  program
    .command('init')
    .description('Initialize a new PRD project with prd.json and progress.txt')
    .option('-f, --force', 'Overwrite existing files')
    .action((options: { force?: boolean }) => {
      const cwd = process.cwd()
      const prdPath = path.join(cwd, 'prd.json')
      const progressPath = path.join(cwd, 'progress.txt')

      if (!options.force) {
        const existingFiles: string[] = []
        if (fs.existsSync(prdPath)) {
          existingFiles.push('prd.json')
        }
        if (fs.existsSync(progressPath)) {
          existingFiles.push('progress.txt')
        }

        if (existingFiles.length > 0) {
          console.error(`Error: ${existingFiles.join(' and ')} already exist(s).`)
          console.error('Use --force to overwrite existing files.')
          process.exit(1)
        }
      }

      fs.writeFileSync(prdPath, `${JSON.stringify(PRD_TEMPLATE, null, 2)}\n`)
      process.stdout.write('Created prd.json\n')

      fs.writeFileSync(progressPath, PROGRESS_TEMPLATE)
      process.stdout.write('Created progress.txt\n')

      process.stdout.write('\nProject initialized successfully!\n')
      process.stdout.write('Edit prd.json to define your project tasks.\n')
    })
}
