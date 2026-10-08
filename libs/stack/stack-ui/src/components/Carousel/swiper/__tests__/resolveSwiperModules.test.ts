import type { SwiperModule } from 'swiper/types'
import { A11y, Autoplay, Controller, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { logger } from '../../../../logger'
import { resolveSwiperModules, supportedSwiperModules } from '../resolveSwiperModules'

describe('resolveSwiperModules', () => {
  it('always includes the default A11y and Controller modules', () => {
    expect(resolveSwiperModules(undefined)).toEqual([A11y, Controller])
  })

  it('maps supported module names to their Swiper module, defaults last', () => {
    expect(resolveSwiperModules(['Navigation', 'Pagination', 'Autoplay', 'Keyboard', 'Mousewheel'])).toEqual([
      Navigation,
      Pagination,
      Autoplay,
      Keyboard,
      Mousewheel,
      A11y,
      Controller,
    ])
  })

  it('exposes exactly the supported set', () => {
    expect(Object.keys(supportedSwiperModules).sort()).toEqual([
      'A11y',
      'Autoplay',
      'Controller',
      'Keyboard',
      'Mousewheel',
      'Navigation',
      'Pagination',
    ])
  })

  it('passes Swiper module objects through unchanged', () => {
    const custom: SwiperModule = () => {}
    expect(resolveSwiperModules([custom, 'Navigation'])).toEqual([custom, Navigation, A11y, Controller])
  })

  it('skips unsupported module names with a warning', () => {
    const warn = vi.spyOn(logger, 'log').mockImplementation(() => {})
    expect(resolveSwiperModules(['EffectFade', 'Navigation'])).toEqual([Navigation, A11y, Controller])
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('EffectFade'), 'warn')
    warn.mockRestore()
  })
})
