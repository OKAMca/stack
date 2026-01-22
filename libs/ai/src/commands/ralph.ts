import type { Command } from 'commander'
import { spawn } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface PrdConfig {
  agent?: string
  context?: string
  verification?: string
}

interface RalphOptions {
  agent?: string
  context?: string
  verification?: string
  prd?: string
  progress?: string
}

const DEFAULTS = {
  agent: 'claude',
  context: '',
  verification: 'Run your tests and type checks.',
}

function readPrdConfig(prdPath: string): PrdConfig {
  try {
    const content = fs.readFileSync(prdPath, 'utf-8')
    const prd = JSON.parse(content) as { config?: PrdConfig }
    return prd.config ?? {}
  }
  catch {
    return {}
  }
}

function resolveScriptPath(): string {
  const possiblePaths = [
    path.join(__dirname, 'scripts', 'prd-agent.sh'),
    path.join(__dirname, '..', 'scripts', 'prd-agent.sh'),
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
    .option('-a, --agent <agent>', 'AI agent to use (claude or codex)')
    .option('-c, --context <path>', 'Additional context file or directory path')
    .option('-v, --verification <cmd>', 'Verification command to run after each task')
    .option('-p, --prd <path>', 'Path to prd.json file', 'prd.json')
    .option('--progress <path>', 'Path to progress.txt file', 'progress.txt')
    .action((iterations: string, options: RalphOptions) => {
      const cwd = process.cwd()

      const prdPath = path.isAbsolute(options.prd ?? 'prd.json')
        ? options.prd!
        : path.join(cwd, options.prd ?? 'prd.json')

      const progressPath = path.isAbsolute(options.progress ?? 'progress.txt')
        ? options.progress!
        : path.join(cwd, options.progress ?? 'progress.txt')

      const contextPath = options.context != null && options.context.length > 0
        ? (path.isAbsolute(options.context) ? options.context : path.join(cwd, options.context))
        : cwd

      if (!fs.existsSync(prdPath)) {
        process.stderr.write(`Error: PRD file not found at ${prdPath}\n`)
        process.stderr.write('Run "okam-ai init" to create a new PRD project.\n')
        process.exit(1)
      }

      const prdConfig = readPrdConfig(prdPath)

      const resolvedAgent = options.agent ?? prdConfig.agent ?? DEFAULTS.agent
      const resolvedVerification = options.verification ?? prdConfig.verification ?? DEFAULTS.verification

      let resolvedContext = contextPath
      if (options.context == null && prdConfig.context != null && prdConfig.context.length > 0) {
        const prdDir = path.dirname(prdPath)
        resolvedContext = path.isAbsolute(prdConfig.context)
          ? prdConfig.context
          : path.join(prdDir, prdConfig.context)
      }

      const iterationCount = Number(iterations)
      if (!Number.isInteger(iterationCount) || iterationCount < 1) {
        process.stderr.write('Error: iterations must be a positive integer\n')
        process.exit(1)
      }

      let scriptPath: string
      try {
        scriptPath = resolveScriptPath()
      }
      catch (error) {
        process.stderr.write(`${(error as Error).message}\n`)
        process.exit(1)
      }

      const env = {
        ...process.env,
        RALPH_AGENT: resolvedAgent,
        RALPH_CONTEXT: resolvedContext,
        RALPH_VERIFICATION: resolvedVerification,
        RALPH_PRD: prdPath,
        RALPH_PROGRESS: progressPath,
      }

      process.stdout.write(`Starting Ralph with ${iterationCount} iteration(s)...\n`)
      process.stdout.write(`PRD: ${prdPath}\n`)
      process.stdout.write(`Context: ${resolvedContext}\n`)
      process.stdout.write(`Agent: ${resolvedAgent}\n`)
      process.stdout.write(`Verification: ${resolvedVerification}\n`)
      process.stdout.write('\n')

      const child = spawn('bash', [scriptPath, iterationCount.toString()], {
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
