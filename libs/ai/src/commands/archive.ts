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
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`
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

      if (!fs.existsSync(prdPath)) {
        process.stderr.write('Error: prd.json not found. Nothing to archive.\n')
        process.exit(1)
      }

      let projectSlug = 'project'
      try {
        const prdContent = fs.readFileSync(prdPath, 'utf-8')
        const prd = JSON.parse(prdContent) as PrdFile
        if (typeof prd.project === 'string' && prd.project.length > 0) {
          const slug = slugify(prd.project)
          if (slug.length > 0) {
            projectSlug = slug
          }
          else {
            process.stderr.write('Warning: Project name contains no alphanumeric characters, using default slug.\n')
          }
        }
      }
      catch {
        process.stderr.write('Warning: Could not parse prd.json, using default slug.\n')
      }

      if (!fs.existsSync(archiveDir)) {
        fs.mkdirSync(archiveDir, { recursive: true })
        process.stdout.write('Created archive/ directory\n')
      }

      const timestamp = getTimestamp()
      const archivedFiles: string[] = []

      const archivePrdName = `prd_${projectSlug}_${timestamp}.json`
      const archivePrdPath = path.join(archiveDir, archivePrdName)
      fs.renameSync(prdPath, archivePrdPath)
      archivedFiles.push(archivePrdName)
      process.stdout.write(`Archived prd.json -> archive/${archivePrdName}\n`)

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
