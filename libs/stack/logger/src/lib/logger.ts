export type LogSeverity = 'info' | 'warn' | 'error' | 'log'
export type LogFunction = (message: string, severity?: LogSeverity, context?: Record<string, unknown>) => void

class Logger {
  private static instance: Logger

  private logger: LogFunction

  private env = process.env['NODE_ENV']

  private constructor() {
    this.logger = this.internalLogger
  }

  private internalLogger(message: string, severity?: LogSeverity, context?: Record<string, unknown>): void {
    if (this.env === 'test' || this.env === 'production') {
      return
    }
    // eslint-disable-next-line no-console
    console[severity || 'log'](message, context)
  }

  public setLogger(logger: LogFunction) {
    this.logger = (message: string, severity?: LogSeverity, context?: Record<string, unknown>) => {
      this.internalLogger(message, severity, context)
      logger(message, severity, context)
    }
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public log(message: string, severity?: LogSeverity, context?: Record<string, unknown>): void {
    this.logger(message, severity, context)
  }
}

export const logger = Logger.getInstance()
