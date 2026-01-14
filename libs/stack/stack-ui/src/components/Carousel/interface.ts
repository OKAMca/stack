/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactNode } from 'react'
import type * as SwiperModules from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'
import type { TDefaultComponent } from '../../types/components'
import type { TCustomA11yOptions } from './a11y/interface'
import type { TCarouselNavigationButtonComponent } from './navigation/interface'
import type { TCarouselSlideProps } from './swiper/interface'

export interface TSwiperProps extends Omit<SwiperProps, 'a11y'> {
  a11y?: TCustomA11yOptions
  id: string
}

export type TSwiperModule = keyof typeof SwiperModules

export interface TLegacyCarouselProps<TSlideProps extends TCarouselSlideProps = TCarouselSlideProps> extends Omit<
  TCarouselProps,
  'children'
> {
  children: (props: TSlideProps) => ReactNode
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
