import type { ReactNode } from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'
import type { SwiperModule } from 'swiper/types'
import type { TDefaultComponent } from '../../types/components'
import type { TCustomA11yOptions } from './a11y/interface'
import type { TCarouselNavigationButtonComponent } from './navigation/interface'
import type { TCarouselSlideProps } from './swiper/interface'

export interface TSwiperProps extends Omit<SwiperProps, 'a11y'> {
  a11y?: TCustomA11yOptions
  id: string
}

export type TSwiperModule = keyof typeof SwiperModules

/**
 * A Swiper module, by name or as the module itself.
 * Names are resolved for A11y, Autoplay, Controller, Keyboard, Mousewheel, Navigation and Pagination
 * (see `supportedSwiperModules`); pass any other module directly, e.g. `import { EffectFade } from 'swiper/modules'`.
 */
export type TCarouselModule = TSwiperModule | SwiperModule

export interface TLegacyCarouselProps<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps> extends Omit<
  TCarouselProps,
  'children'
> {
  children: (_props: TSlideProps) => ReactNode
  /**
   * @deprecated Call the button in children instead
   */
  prevButton?: TCarouselNavigationButtonComponent
  /**
   * @deprecated Call the button in children instead
   */
  nextButton?: TCarouselNavigationButtonComponent
}

export interface TCarouselProps<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps>
  extends Omit<TSwiperProps, 'children' | 'modules' | 'controller'>, Omit<TDefaultComponent, 'children'> {
  children: ReactNode
  modules?: TCarouselModule[]
  slides: TSlideProps[]
}
