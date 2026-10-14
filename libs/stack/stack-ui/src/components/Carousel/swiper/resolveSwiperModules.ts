import type { SwiperModule } from 'swiper/types'
import type { TCarouselModule, TSwiperModule } from '../interface'
import { A11y, Autoplay, Controller, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'
import { logger } from '../../../logger'

/**
 * Swiper modules that can be enabled by name through the carousel `modules` prop.
 * Named imports keep the rest of `swiper/modules` out of the client bundle.
 * For any other module, pass the Swiper module itself, e.g. `modules={[EffectFade]}`.
 */
export const supportedSwiperModules = {
  A11y,
  Autoplay,
  Controller,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} satisfies Partial<Record<TSwiperModule, SwiperModule>>

export type TSupportedSwiperModule = keyof typeof supportedSwiperModules

const defaultModules: TSupportedSwiperModule[] = ['A11y', 'Controller']

function isSupportedSwiperModule(name: string): name is TSupportedSwiperModule {
  return Object.hasOwn(supportedSwiperModules, name)
}

export function resolveSwiperModules(modules: readonly TCarouselModule[] | undefined): SwiperModule[] {
  return [...(modules ?? []), ...defaultModules].flatMap((module) => {
    if (typeof module !== 'string')
      return [module]
    if (isSupportedSwiperModule(module))
      return [supportedSwiperModules[module]]
    logger.log(
      `Swiper module "${module}" cannot be enabled by name. Supported names: ${Object.keys(supportedSwiperModules).join(', ')}. Pass the module itself instead (import { ${module} } from 'swiper/modules').`,
      'warn',
    )
    return []
  })
}
