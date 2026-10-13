'use client'

import type { DOMProps } from '@react-types/shared'
import type { TSwiperModule } from '../interface'
import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'
import { filterDOMProps } from '@react-aria/utils'
import { useEffect } from 'react'
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
  useEffect(() => {
    if (controller == null)
      return

    let suppressSwipeClick = false
    const onSwipe = () => {
      suppressSwipeClick = true
    }
    const onInput = () => {
      suppressSwipeClick = false
    }
    const onClick = (event: MouseEvent) => {
      // React Aria can synthesize a click after Swiper has reset allowClick.
      // Keep the gesture decision until that click or the next deliberate input.
      if (suppressSwipeClick && controller.params.preventClicks) {
        suppressSwipeClick = false
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }
    const element = controller.el
    controller.on('sliderFirstMove', onSwipe)
    element.addEventListener('pointerdown', onInput, true)
    element.addEventListener('keydown', onInput, true)
    element.addEventListener('click', onClick, true)
    return () => {
      controller.off('sliderFirstMove', onSwipe)
      element.removeEventListener('pointerdown', onInput, true)
      element.removeEventListener('keydown', onInput, true)
      element.removeEventListener('click', onClick, true)
    }
  }, [controller])

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
