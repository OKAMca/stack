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

    logger.log('Test message', 'info')
    expect(customLogger.log).toHaveBeenCalledWith('Test message', 'info', undefined)
  })
})
