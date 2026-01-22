import type { Command } from 'commander'
import { spawn } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface RalphOptions {
  iterations?: string
  model?: string
  context?: string
  prd?: string
  progress?: string
}

function resolveScriptPath(): string {
  // Look for prd-agent.sh in the scripts directory relative to this file
  // When built, the structure is: dist/libs/ai/commands/ralph.js
  // Scripts are at: dist/libs/ai/scripts/prd-agent.sh
  const possiblePaths = [
    path.join(__dirname, '..', 'scripts', 'prd-agent.sh'), // Built location
    path.join(__dirname, '..', '..', 'scripts', 'prd-agent.sh'), // Alternative
  ]

  for (const scriptPath of possiblePaths) {
    if (fs.existsSync(scriptPath)) {
      return scriptPath
    }
  }

  throw new Error(
    'prd-agent.sh script not found. Make sure the package is properly installed.',
  )
}

export function registerRalphCommand(program: Command): void {
  program
    .command('ralph')
    .description('Run the Ralph AI assistant to process PRD tasks')
    .argument('[iterations]', 'Number of iterations to run', '1')
    .option('-m, --model <model>', 'Claude model to use', 'claude-sonnet-4-20250514')
    .option('-c, --context <path>', 'Additional context file or directory path')
    .option('-p, --prd <path>', 'Path to prd.json file', 'prd.json')
    .option('--progress <path>', 'Path to progress.txt file', 'progress.txt')
    .action((iterations: string, options: RalphOptions) => {
      const cwd = process.cwd()

      // Resolve PRD path
      const prdPath = path.isAbsolute(options.prd ?? 'prd.json')
        ? options.prd!
        : path.join(cwd, options.prd ?? 'prd.json')

      // Resolve progress path
      const progressPath = path.isAbsolute(options.progress ?? 'progress.txt')
        ? options.progress!
        : path.join(cwd, options.progress ?? 'progress.txt')

      // Resolve context path (defaults to cwd)
      const contextPath = options.context != null && options.context.length > 0
        ? (path.isAbsolute(options.context) ? options.context : path.join(cwd, options.context))
        : cwd

      // Check if prd.json exists
      if (!fs.existsSync(prdPath)) {
        process.stderr.write(`Error: PRD file not found at ${prdPath}\n`)
        process.stderr.write('Run "okam-ai init" to create a new PRD project.\n')
        process.exit(1)
      }

      // Validate iterations is a positive integer
      const iterationCount = Number.parseInt(iterations, 10)
      if (Number.isNaN(iterationCount) || iterationCount < 1) {
        process.stderr.write('Error: iterations must be a positive integer\n')
        process.exit(1)
      }

      // Resolve the prd-agent.sh script path
      let scriptPath: string
      try {
        scriptPath = resolveScriptPath()
      }
      catch (error) {
        process.stderr.write(`${(error as Error).message}\n`)
        process.exit(1)
      }

      // Set up environment variables for prd-agent.sh
      const env = {
        ...process.env,
        RALPH_MODEL: options.model ?? 'claude-sonnet-4-20250514',
        RALPH_CONTEXT: contextPath,
        RALPH_PRD: prdPath,
        RALPH_PROGRESS: progressPath,
      }

      process.stdout.write(`Starting Ralph with ${iterationCount} iteration(s)...\n`)
      process.stdout.write(`PRD: ${prdPath}\n`)
      process.stdout.write(`Context: ${contextPath}\n`)
      process.stdout.write(`Model: ${env.RALPH_MODEL}\n`)
      process.stdout.write('\n')

      // Spawn prd-agent.sh with the iteration count as argument
      const child = spawn('bash', [scriptPath, iterations], {
        cwd,
        env,
        stdio: 'inherit',
      })

      child.on('error', (error) => {
        process.stderr.write(`Failed to start Ralph: ${error.message}\n`)
        process.exit(1)
      })

      child.on('exit', (code) => {
        process.exit(code ?? 0)
      })
    })
}
