'use client'

import type { DOMProps } from '@react-types/shared'
import type { TSwiperModule } from '../interface'
import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'
import { filterDOMProps } from '@react-aria/utils'
import { mergeProps } from 'react-aria'
import * as swiperModules from 'swiper/modules'
import { useCarousel } from '../../../providers/Carousel'

const defaultModules: TSwiperModule[] = ['A11y', 'Controller']

export function useCarouselSwiper(props: TCarouselSwiperProps): TCarouselSwiper {
  const { children, ...rest } = props
  const {
    controller,
    setController,
    modules,
    slides,
    id,
    swiperProps: contextSwiperProps,
    swiperRef,
    setActiveIndex,
  } = useCarousel()
  const a11y = typeof controller?.params?.a11y === 'object' ? controller.params.a11y : undefined
  const { slidesPerView, slidesPerGroup } = contextSwiperProps

  const importedModules = [...(modules ?? []), ...defaultModules].map(
    module => swiperModules[module],
  )

  const { containerRoleDescriptionMessage = 'carousel' } = a11y ?? {}

  const swiperProps: TCarouselSwiper['swiperProps'] = {
    'navigation': false,
    'pagination': modules?.includes('Pagination') ? { el: null } : false,
    'slidesPerGroup': slidesPerGroup ?? (typeof slidesPerView === 'number' ? slidesPerView : 1),
    id,
    'watchSlidesProgress': true,
    'role': 'group',
    'onSwiper': setController,
    'onSlideChange': (swiper) => {
      setActiveIndex(swiper.realIndex)
    },
    'modules': importedModules,
    'keyboard': {
      enabled: true,
      onlyInViewport: false,
    },
    'a11y': {
      enabled: true,
      ...a11y,
    },
    'aria-roledescription': containerRoleDescriptionMessage ?? undefined,
    'tabIndex': 0,
  }

  return {
    swiperProps: mergeProps(contextSwiperProps, swiperProps, filterDOMProps(rest as DOMProps)),
    slides,
    ref: swiperRef,
  }
}
