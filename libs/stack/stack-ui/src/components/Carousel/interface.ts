import type React from 'react'
import type Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types/swiper-options'
import type { TDefaultComponent } from '../../types/components'

export type TSlide = {
  id?: string
  child?: React.ReactNode
}
export interface TCarouselProps extends TDefaultComponent, SwiperOptions {
  id?: React.Key
  children?: React.ReactNode
  slides?: TSlide[]
  navigationButtons?: {
    leftButton: React.ReactElement
    rightButton: React.ReactElement
  }
}

export interface TCarouselButtonProps extends TDefaultComponent {
  navigationButton?: React.ReactElement
  icon: string
  id: string
  swiperFn: () => void
  swiper: Swiper | undefined
}
