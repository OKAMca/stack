import type { ReactNode } from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperClass, SwiperProps } from 'swiper/react'
import type { SwiperModule } from 'swiper/types'
import type { TDefaultComponent } from '../../types/components'
import type { TCustomA11yOptions } from './a11y/interface'
import type { TCarouselNavigationButtonComponent } from './navigation/interface'
import type { TCarouselSlideProps } from './swiper/interface'

export type TCarouselLayoutOption = boolean | ((swiper: SwiperClass) => boolean)

export interface TSwiperProps extends Omit<SwiperProps, 'a11y'> {
  a11y?: TCustomA11yOptions
  id: string
  /**
   * Extend the final snap to the last slide's start without changing slide sizes.
   * A predicate can select responsive layouts from the current Swiper params.
   * Supports numeric slidesPerView, slidesPerGroup=1 and a single row in the
   * standard transform-based slider. Pass slidesPerGroup={1} explicitly: it
   * otherwise defaults to slidesPerView. Loop, centered, auto-width, virtual and
   * CSS-mode sliders retain their native snapping when this option is set.
   * Free mode, centerInsufficientSlides, roundLengths and slide offsets are also
   * excluded, as are rails whose cards all fit.
   */
  alignLastSlideToStart?: TCarouselLayoutOption
  /**
   * Stop a horizontal drag just before the next slide and at the previous one,
   * so a release moves at most one slide. Swiper's swipe params are unchanged.
   * Supports the same snapped layouts as alignLastSlideToStart; a predicate can
   * enable it only on mobile.
   */
  limitSwipeToOneSlide?: TCarouselLayoutOption
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
