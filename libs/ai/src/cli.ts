#!/usr/bin/env node

import { createRequire } from 'node:module'
import { program } from 'commander'

import { registerArchiveCommand } from './commands/archive'
import { registerInitCommand } from './commands/init'
import { registerRalphCommand } from './commands/ralph'

const require = createRequire(import.meta.url)
const pkg = require('./package.json') as { version: string }

program
  .name('okam-ai')
  .description('CLI for AI automation tools')
  .version(pkg.version)

// Register commands
registerInitCommand(program)
registerArchiveCommand(program)
registerRalphCommand(program)

program.parse()
