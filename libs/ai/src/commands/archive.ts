import type { Command } from 'commander'
import * as fs from 'node:fs'
import * as path from 'node:path'

interface PrdFile {
  project?: string
  [key: string]: unknown
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50)
}

function getTimestamp(): string {
  const now = new Date()
  const date = now.toISOString().slice(0, 10)
  const time = now.toTimeString().slice(0, 8).replace(/:/g, '-')
  return `${date}_${time}`
}

export function registerArchiveCommand(program: Command): void {
  program
    .command('archive')
    .description('Archive prd.json and progress.txt to archive/ folder with timestamp')
    .action(() => {
      const cwd = process.cwd()
      const prdPath = path.join(cwd, 'prd.json')
      const progressPath = path.join(cwd, 'progress.txt')
      const archiveDir = path.join(cwd, 'archive')

      // Check if prd.json exists
      if (!fs.existsSync(prdPath)) {
        process.stderr.write('Error: prd.json not found. Nothing to archive.\n')
        process.exit(1)
      }

      // Read prd.json to get project name for slug
      let projectSlug = 'project'
      try {
        const prdContent = fs.readFileSync(prdPath, 'utf-8')
        const prd = JSON.parse(prdContent) as PrdFile
        if (typeof prd.project === 'string' && prd.project.length > 0) {
          projectSlug = slugify(prd.project)
        }
      }
      catch {
        process.stderr.write('Warning: Could not parse prd.json, using default slug.\n')
      }

      // Create archive directory if it doesn't exist
      if (!fs.existsSync(archiveDir)) {
        fs.mkdirSync(archiveDir, { recursive: true })
        process.stdout.write('Created archive/ directory\n')
      }

      const timestamp = getTimestamp()
      const archivedFiles: string[] = []

      // Archive prd.json
      const archivePrdName = `prd_${projectSlug}_${timestamp}.json`
      const archivePrdPath = path.join(archiveDir, archivePrdName)
      fs.renameSync(prdPath, archivePrdPath)
      archivedFiles.push(archivePrdName)
      process.stdout.write(`Archived prd.json -> archive/${archivePrdName}\n`)

      // Archive progress.txt if it exists
      if (fs.existsSync(progressPath)) {
        const archiveProgressName = `progress_${projectSlug}_${timestamp}.txt`
        const archiveProgressPath = path.join(archiveDir, archiveProgressName)
        fs.renameSync(progressPath, archiveProgressPath)
        archivedFiles.push(archiveProgressName)
        process.stdout.write(`Archived progress.txt -> archive/${archiveProgressName}\n`)
      }
      else {
        process.stdout.write('Note: progress.txt not found, skipping.\n')
      }

      process.stdout.write(`\nArchive complete! ${archivedFiles.length} file(s) archived.\n`)
    })
}
