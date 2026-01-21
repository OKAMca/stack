export type LogSeverity = 'info' | 'warn' | 'error' | 'log'
export type LogFunction = (_message: string, _severity?: LogSeverity, _context?: Record<string, unknown>) => void

export class Logger {
  private static instance: Logger | undefined

  private logger: LogFunction

  private nameSpace: string = '[STACK]'

  private suppressConsole = false

  private env = process.env['NODE_ENV']

  public constructor(nameSpace?: string, logger?: LogFunction, suppressConsole?: boolean) {
    this.nameSpace = nameSpace ?? this.nameSpace
    this.suppressConsole = suppressConsole ?? this.suppressConsole
    this.logger = logger ?? this.internalLogger.bind(this)
  }

  private internalLogger(message: string, severity?: LogSeverity, context?: Record<string, unknown>): void {
    if (this.env === 'production') {
      return
    }
    // eslint-disable-next-line no-console -- Logger utility intentionally uses console for dev output
    console[severity ?? 'log'](`${this.nameSpace} ${message}`.trimStart(), context ?? '')
  }

  public setLogger(logger: LogFunction) {
    this.logger = (message: string, severity?: LogSeverity, context?: Record<string, unknown>) => {
      if (this.suppressConsole) {
        this.internalLogger(message, severity, context)
      }

      logger(message, severity, context)
    }
  }

  public static getInstance(): Logger {
    Logger.instance ??= new Logger()
    return Logger.instance
  }

  public log(message: string, severity?: LogSeverity, context?: Record<string, unknown>): void {
    this.logger(message, severity, context)
  }
}

export const logger = Logger.getInstance()
