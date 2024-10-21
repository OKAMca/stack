import type { LogSeverity } from '@okam/logger'
import { createLogger } from '@okam/logger'

export const logger = createLogger('[DirectusNext]')

export function log(msg: string, context?: unknown, severity: LogSeverity = 'log'): void {
  if (process.env.NODE_ENV === 'development') {
    logger.log(msg, severity, { context })
  }
}
