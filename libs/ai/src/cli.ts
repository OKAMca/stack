#!/usr/bin/env node

import { program } from 'commander'

import { registerArchiveCommand } from './commands/archive'
import { registerInitCommand } from './commands/init'
import { registerRalphCommand } from './commands/ralph'

declare const __VERSION__: string

program
  .name('okam-ai')
  .description('CLI for AI automation tools')
  .version(__VERSION__)

registerInitCommand(program)
registerArchiveCommand(program)
registerRalphCommand(program)

program.parse()
