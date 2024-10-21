import type { LogFunction } from './logger'
import { Logger } from './logger'

const createLogger = (name: string, logger?: LogFunction, suppressConsole = false) => {
  const log = new Logger(name, logger, suppressConsole)
  log.log(`Logger initialized`, 'info')
  return log
}

export default createLogger
