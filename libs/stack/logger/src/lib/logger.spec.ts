import { logger } from './logger'

describe('logger', () => {
  it('should work', () => {
    expect(logger).toBeDefined()
    expect(logger.log).toBeDefined()
    expect(logger.setLogger).toBeDefined()
    expect(logger.setLogger).toBeInstanceOf(Function)
    expect(logger.log).toBeInstanceOf(Function)
    expect(logger.log('test')).toBeUndefined()
  })
})
