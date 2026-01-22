#!/usr/bin/env node

import { program } from 'commander'

// Commands will be imported here as they are created:
// import { registerInitCommand } from './commands/init'
// import { registerArchiveCommand } from './commands/archive'
// import { registerRalphCommand } from './commands/ralph'

program
  .name('okam-ai')
  .description('CLI for AI automation tools')
  .version('0.0.1')

// Register commands (uncomment as they are implemented):
// registerInitCommand(program)
// registerArchiveCommand(program)
// registerRalphCommand(program)

program.parse()
