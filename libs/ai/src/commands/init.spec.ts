import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'
import { Command } from 'commander'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { registerInitCommand } from './init'

describe('init command', () => {
  let program: Command
  let tempDir: string
  let originalCwd: string
  let mockExit: ReturnType<typeof vi.spyOn>
  let mockStdout: ReturnType<typeof vi.spyOn>
  let mockStderr: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Create temp directory for test isolation
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'init-test-'))
    originalCwd = process.cwd()
    process.chdir(tempDir)

    // Create fresh program instance
    program = new Command()
    program.exitOverride() // Prevent actual process exit
    registerInitCommand(program)

    // Mock process.exit
    mockExit = vi.spyOn(process, 'exit').mockImplementation((code) => {
      throw new Error(`process.exit(${code})`)
    })

    // Mock stdout/stderr
    mockStdout = vi.spyOn(process.stdout, 'write').mockImplementation(() => true)
    mockStderr = vi.spyOn(console, 'error').mockImplementation(() => {})
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

  it('should create prd.json and progress.txt', async () => {
    await program.parseAsync(['node', 'test', 'init'])

    const prdPath = path.join(tempDir, 'prd.json')
    const progressPath = path.join(tempDir, 'progress.txt')

    expect(fs.existsSync(prdPath)).toBe(true)
    expect(fs.existsSync(progressPath)).toBe(true)
  })

  it('should create prd.json with correct structure', async () => {
    await program.parseAsync(['node', 'test', 'init'])

    const prdPath = path.join(tempDir, 'prd.json')
    const content = JSON.parse(fs.readFileSync(prdPath, 'utf-8'))

    expect(content).toHaveProperty('project', '')
    expect(content).toHaveProperty('goal', '')
    expect(content).toHaveProperty('config')
    expect(content.config).toEqual({
      agent: 'claude',
      context: '',
      verification: 'Run your tests and type checks.',
    })
    expect(content).toHaveProperty('statuses')
    expect(content.statuses).toEqual({
      pending: 'Not started',
      in_progress: 'Currently being worked on',
      completed: 'Done',
      blocked: 'Waiting on external dependency',
    })
    expect(content).toHaveProperty('tasks')
    expect(content.tasks).toHaveLength(1)
    expect(content.tasks[0]).toMatchObject({
      id: '1',
      description: '',
      status: 'pending',
      steps: [],
    })
  })

  it('should create progress.txt with correct header', async () => {
    await program.parseAsync(['node', 'test', 'init'])

    const progressPath = path.join(tempDir, 'progress.txt')
    const content = fs.readFileSync(progressPath, 'utf-8')

    expect(content).toContain('# Progress Log')
    expect(content).toContain('Created:')
    expect(content).toContain('## Goal')
  })

  it('should error when prd.json already exists', async () => {
    // Create existing file
    fs.writeFileSync(path.join(tempDir, 'prd.json'), '{}')

    await expect(program.parseAsync(['node', 'test', 'init'])).rejects.toThrow('process.exit(1)')

    expect(mockStderr).toHaveBeenCalledWith(expect.stringContaining('prd.json already exist'))
    expect(mockStderr).toHaveBeenCalledWith(expect.stringContaining('--force'))
  })

  it('should error when progress.txt already exists', async () => {
    // Create existing file
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), '')

    await expect(program.parseAsync(['node', 'test', 'init'])).rejects.toThrow('process.exit(1)')

    expect(mockStderr).toHaveBeenCalledWith(expect.stringContaining('progress.txt already exist'))
  })

  it('should error when both files already exist', async () => {
    // Create existing files
    fs.writeFileSync(path.join(tempDir, 'prd.json'), '{}')
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), '')

    await expect(program.parseAsync(['node', 'test', 'init'])).rejects.toThrow('process.exit(1)')

    expect(mockStderr).toHaveBeenCalledWith(expect.stringContaining('prd.json and progress.txt already exist'))
  })

  it('should overwrite existing files with --force flag', async () => {
    // Create existing files with different content
    fs.writeFileSync(path.join(tempDir, 'prd.json'), '{"old": "content"}')
    fs.writeFileSync(path.join(tempDir, 'progress.txt'), 'old content')

    await program.parseAsync(['node', 'test', 'init', '--force'])

    const prdContent = JSON.parse(fs.readFileSync(path.join(tempDir, 'prd.json'), 'utf-8'))
    expect(prdContent).toHaveProperty('project')
    expect(prdContent).not.toHaveProperty('old')

    const progressContent = fs.readFileSync(path.join(tempDir, 'progress.txt'), 'utf-8')
    expect(progressContent).toContain('# Progress Log')
    expect(progressContent).not.toContain('old content')
  })

  it('should output success messages', async () => {
    await program.parseAsync(['node', 'test', 'init'])

    expect(mockStdout).toHaveBeenCalledWith('Created prd.json\n')
    expect(mockStdout).toHaveBeenCalledWith('Created progress.txt\n')
    expect(mockStdout).toHaveBeenCalledWith('\nProject initialized successfully!\n')
  })
})
