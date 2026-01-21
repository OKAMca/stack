import { describe, expect, it, vi } from 'vitest'
import createLogger from './factoryLogger'
import { logger } from './logger'

describe('logger', () => {
  it('should have required methods and properties', () => {
    expect(logger).toBeDefined()
    expect(logger.log).toBeInstanceOf(Function)
    expect(logger.setLogger).toBeInstanceOf(Function)
  })

  it('should log messages at different levels', () => {
    const mockLog = vi.fn()
    logger.setLogger(mockLog)

    logger.log('Info message', 'info', { key: 'value' })
    expect(mockLog).toHaveBeenCalledWith('Info message', 'info', { key: 'value' })

    logger.log('Warning message', 'warn')
    expect(mockLog).toHaveBeenCalledWith('Warning message', 'warn', undefined)

    logger.log('Error message', 'error')
    expect(mockLog).toHaveBeenCalledWith('Error message', 'error', undefined)
  })

  it('should allow setting a custom logger', () => {
    const customLogger = {
      log: vi.fn(),
    }
    logger.setLogger(customLogger.log)

    logger.log('Test message')
    // When no severity is passed, Logger.log passes undefined (not 'info')
    expect(customLogger.log).toHaveBeenCalledWith('Test message', undefined, undefined)
  })
})

describe('createLogger', () => {
  it('should create a new logger instance', () => {
    const customLogger = {
      log: vi.fn(),
    }
    const log = createLogger('[Test]', customLogger.log)

    log.log('ping')
    expect(customLogger.log).toHaveBeenCalledWith('Logger initialized', 'info', undefined)
    expect(customLogger.log).toHaveBeenCalledWith('ping', undefined, undefined)
  })

  it('should work with multiple instances', () => {
    const logSpy = vi.spyOn(console, 'log')
    const log1 = createLogger('[Test1]')
    const log2 = createLogger('[Test2]')

    log1.log('ping')
    log2.log('pong')

    // internalLogger passes context ?? '' (empty string when no context provided)
    expect(logSpy).toHaveBeenCalledWith('[Test1] ping', '')
    expect(logSpy).toHaveBeenCalledWith('[Test2] pong', '')
  })
})
