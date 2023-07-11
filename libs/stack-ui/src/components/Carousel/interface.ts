import type React from 'react'
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
    leftButton: React.ReactNode
    rightButton: React.ReactNode
  }
}
