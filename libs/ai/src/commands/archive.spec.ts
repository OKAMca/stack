import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'
import { Command } from 'commander'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { registerArchiveCommand } from './archive'

describe('archive command', () => {
  let program: Command
  let tempDir: string
  let originalCwd: string
  let mockExit: ReturnType<typeof vi.spyOn>
  let mockStdout: ReturnType<typeof vi.spyOn>
  let mockStderr: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Create temp directory for test isolation
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'archive-test-'))
    originalCwd = process.cwd()
    process.chdir(tempDir)

    // Create fresh program instance
    program = new Command()
    program.exitOverride() // Prevent actual process exit
    registerArchiveCommand(program)

    // Mock process.exit
    mockExit = vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Error(`process.exit(${code})`)
    })

    // Mock stdout/stderr
    mockStdout = vi.spyOn(process.stdout, 'write').mockImplementation(() => true)
    mockStderr = vi.spyOn(process.stderr, 'write').mockImplementation(() => true)
  })

  afterEach(() => {
    // Restore cwd and clean up
    process.chdir(originalCwd)
    fs.rmSync(tempDir, { recursive: true, force: true })

    // Restore mocks
    mockExit.mockRestore()
    mockStdout.mockRestore()
    mockStderr.mockRestore()
  })

  it('should error when prd.json does not exist', async () => {
    await expect(program.parseAsync(['node', 'test', 'archive'])).rejects.toThrow('process.exit(1)')

    expect(mockStderr).toHaveBeenCalledWith('Error: prd.json not found. Nothing to archive.\n')
  })

  it('should archive prd.json and progress.txt to archive/ folder', async () => {
    // Create test files
    const prdContent = { project: 'Test Project', goal: 'Test goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), '# Progress')

    await program.parseAsync(['node', 'test', 'archive'])

    // Original files should be gone
    expect(fs.existsSync(path.join(tempDir, 'prd.json'))).toBe(false)
    expect(fs.existsSync(path.join(tempDir, 'progress.txt'))).toBe(false)

    // Archive directory should exist with files
    const archiveDir = path.join(tempDir, 'archive')
    expect(fs.existsSync(archiveDir)).toBe(true)

    const archivedFiles = fs.readdirSync(archiveDir)
    expect(archivedFiles).toHaveLength(2)
    expect(archivedFiles.some(f => f.startsWith('prd_test-project_') && f.endsWith('.json'))).toBe(true)
    expect(archivedFiles.some(f => f.startsWith('progress_test-project_') && f.endsWith('.txt'))).toBe(true)
  })

  it('should create archive/ directory if it does not exist', async () => {
    const prdContent = { project: 'Test', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    expect(fs.existsSync(path.join(tempDir, 'archive'))).toBe(false)

    await program.parseAsync(['node', 'test', 'archive'])

    expect(fs.existsSync(path.join(tempDir, 'archive'))).toBe(true)
    expect(mockStdout).toHaveBeenCalledWith('Created archive/ directory\n')
  })

  it('should use existing archive/ directory without message', async () => {
    const prdContent = { project: 'Test', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))
    fs.mkdirSync(path.join(tempDir, 'archive'))

    await program.parseAsync(['node', 'test', 'archive'])

    // Should not output "Created archive/ directory" message
    expect(mockStdout).not.toHaveBeenCalledWith('Created archive/ directory\n')
  })

  it('should skip progress.txt if it does not exist', async () => {
    const prdContent = { project: 'Test', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    expect(archivedFiles).toHaveLength(1)
    expect(archivedFiles[0]).toMatch(/^prd_test_/)

    expect(mockStdout).toHaveBeenCalledWith('Note: progress.txt not found, skipping.\n')
    expect(mockStdout).toHaveBeenCalledWith(expect.stringContaining('1 file(s) archived'))
  })

  it('should slugify project name correctly', async () => {
    const prdContent = { project: '@okam/AI CLI Package', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    expect(archivedFiles[0]).toMatch(/^prd_okam-ai-cli-package_/)
  })

  it('should truncate long project names in slug to 50 characters', async () => {
    const longProjectName = 'This is a very long project name that should be truncated to fifty characters'
    const prdContent = { project: longProjectName, goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    // Extract slug from filename: prd_{slug}_{date}.json
    const match = archivedFiles[0].match(/^prd_(.+)_\d{4}-\d{2}-\d{2}\.json$/)
    expect(match).not.toBeNull()
    expect(match![1].length).toBeLessThanOrEqual(50)
  })

  it('should use default slug when prd.json has no project field', async () => {
    const prdContent = { goal: 'Goal without project' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    expect(archivedFiles[0]).toMatch(/^prd_project_/)
  })

  it('should use default slug when prd.json has empty project field', async () => {
    const prdContent = { project: '', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    expect(archivedFiles[0]).toMatch(/^prd_project_/)
  })

  it('should use default slug and warn when prd.json is invalid JSON', async () => {
    fs.writeFileSync(path.join(tempDir, 'prd.json'), 'not valid json {{{')

    await program.parseAsync(['node', 'test', 'archive'])

    expect(mockStderr).toHaveBeenCalledWith('Warning: Could not parse prd.json, using default slug.\n')

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    expect(archivedFiles[0]).toMatch(/^prd_project_/)
  })

  it('should use ISO date format (YYYY-MM-DD) in filename', async () => {
    const prdContent = { project: 'Test', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))

    await program.parseAsync(['node', 'test', 'archive'])

    const archivedFiles = fs.readdirSync(path.join(tempDir, 'archive'))
    // Check for ISO date pattern
    expect(archivedFiles[0]).toMatch(/\d{4}-\d{2}-\d{2}\.json$/)
  })

  it('should preserve file contents when archiving', async () => {
    const prdContent = { project: 'Test', goal: 'Preserve this goal', tasks: [{ id: '1' }] }
    const progressContent = '# Progress Log\n\nImportant content to preserve'
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent, null, 2))
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), progressContent)

    await program.parseAsync(['node', 'test', 'archive'])

    const archiveDir = path.join(tempDir, 'archive')
    const archivedFiles = fs.readdirSync(archiveDir)

    const archivedPrd = archivedFiles.find(f => f.startsWith('prd_'))!
    const archivedProgress = archivedFiles.find(f => f.startsWith('progress_'))!

    const archivedPrdContent = JSON.parse(fs.readFileSync(path.join(archiveDir, archivedPrd), 'utf-8'))
    const archivedProgressContent = fs.readFileSync(path.join(archiveDir, archivedProgress), 'utf-8')

    expect(archivedPrdContent.goal).toBe('Preserve this goal')
    expect(archivedPrdContent.tasks).toEqual([{ id: '1' }])
    expect(archivedProgressContent).toBe(progressContent)
  })

  it('should output correct success messages', async () => {
    const prdContent = { project: 'Test Project', goal: 'Goal' }
    fs.writeFileSync(path.join(tempDir, 'prd.json'), JSON.stringify(prdContent))
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), '# Progress')

    await program.parseAsync(['node', 'test', 'archive'])

    expect(mockStdout).toHaveBeenCalledWith(expect.stringMatching(/Archived prd\.json -> archive\/prd_test-project_\d{4}-\d{2}-\d{2}\.json\n/))
    expect(mockStdout).toHaveBeenCalledWith(expect.stringMatching(/Archived progress\.txt -> archive\/progress_test-project_\d{4}-\d{2}-\d{2}\.txt\n/))
    expect(mockStdout).toHaveBeenCalledWith('\nArchive complete! 2 file(s) archived.\n')
  })
})
