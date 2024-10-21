/* eslint-disable no-console */
import createLogger from './factoryLogger'
import { logger } from './logger'

describe('logger', () => {
  it('should have required methods and properties', () => {
    expect(logger).toBeDefined()
    expect(logger.log).toBeInstanceOf(Function)
    expect(logger.setLogger).toBeInstanceOf(Function)
  })

  it('should log messages at different levels', () => {
    const mockLog = jest.fn()
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
      log: jest.fn(),
    }
    logger.setLogger(customLogger.log)

    logger.log('Test message')
    expect(customLogger.log).toHaveBeenCalledWith('Test message', 'info', undefined)
  })
})

describe('createLogger', () => {
  it('should create a new logger instance', () => {
    const customLogger = {
      log: jest.fn(),
    }
    const log = createLogger('[Test]', customLogger.log)

    log.log('ping')
    expect(customLogger.log).toHaveBeenCalledWith('Logger initialized', 'info', undefined)
    expect(customLogger.log).toHaveBeenCalledWith('ping', undefined, undefined)
  })

  it('should work with multiple instances', () => {
    const logSpy = jest.spyOn(console, 'log')
    const log1 = createLogger('[Test1]')
    const log2 = createLogger('[Test2]')

    log1.log('ping')
    log2.log('pong')

    expect(logSpy).toHaveBeenCalledWith('[Test1] ping', undefined)
    expect(logSpy).toHaveBeenCalledWith('[Test2] pong', undefined)
  })
})
