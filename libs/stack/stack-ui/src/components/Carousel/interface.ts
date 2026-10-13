import type { ReactNode } from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperClass, SwiperProps } from 'swiper/react'
import type { TDefaultComponent } from '../../types/components'
import type { TCustomA11yOptions } from './a11y/interface'
import type { TCarouselNavigationButtonComponent } from './navigation/interface'
import type { TCarouselSlideProps } from './swiper/interface'

export type TLastSlideAlignment = boolean | ((swiper: SwiperClass) => boolean)

export interface TSwiperProps extends Omit<SwiperProps, 'a11y'> {
  a11y?: TCustomA11yOptions
  id: string
  /**
   * Extend the final snap to the last slide's start without changing slide sizes.
   * A predicate can select responsive layouts from the current Swiper params.
   * Supports numeric slidesPerView, slidesPerGroup=1 and a single row in the
   * standard transform-based slider. Loop, centered, auto-width, virtual and
   * CSS-mode sliders retain their native snapping when this option is set.
   */
  alignLastSlideToStart?: TLastSlideAlignment
}

export type TSwiperModule = keyof typeof SwiperModules

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
  modules?: TSwiperModule[]
  slides: TSlideProps[]
}
