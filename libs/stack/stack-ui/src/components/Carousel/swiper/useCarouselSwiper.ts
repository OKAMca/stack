'use client'

import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'
import { useCarousel } from '../../../providers/Carousel'
import { resolveSwiperModules } from './resolveSwiperModules'
import { useCarouselSwiperWithoutModules } from './useCarouselSwiperWithoutModules'

export function useCarouselSwiper(props: TCarouselSwiperProps): TCarouselSwiper {
  const { modules } = useCarousel()
  const carouselSwiper = useCarouselSwiperWithoutModules(props)
  return { ...carouselSwiper, swiperProps: { ...carouselSwiper.swiperProps, modules: resolveSwiperModules(modules) } }
}
