'use client'

import type { DOMProps } from '@react-types/shared'
import type { TSwiperModule } from '../interface'
import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'
import { filterDOMProps } from '@react-aria/utils'
import { useEffect } from 'react'
import { mergeProps } from 'react-aria'
import * as swiperModules from 'swiper/modules'
import { useCarousel } from '../../../providers/Carousel'
import { alignLastSlideToStart } from './alignLastSlideToStart'

// Covers React Aria's 80ms fallback and delayed browser compatibility clicks.
const SWIPE_CLICK_WINDOW_MS = 350

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
    let resetTimer: ReturnType<typeof setTimeout> | undefined
    const onSwipe = () => {
      suppressSwipeClick = true
    }
    const onInput = () => {
      clearTimeout(resetTimer)
      suppressSwipeClick = false
    }
    const onTouchEnd = () => {
      if (suppressSwipeClick) {
        clearTimeout(resetTimer)
        resetTimer = setTimeout(onInput, SWIPE_CLICK_WINDOW_MS)
      }
    }
    const onClick = (event: MouseEvent) => {
      // React Aria can synthesize a click after Swiper has reset allowClick.
      // Bound suppression so a gesture without a click cannot swallow a later
      // virtual activation that has no preceding pointerdown or keydown.
      if (suppressSwipeClick && controller.params.preventClicks) {
        onInput()
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }
    const element = controller.el
    controller.on('sliderFirstMove', onSwipe)
    controller.on('touchEnd', onTouchEnd)
    element.addEventListener('pointerdown', onInput, true)
    element.addEventListener('keydown', onInput, true)
    element.addEventListener('pointercancel', onInput, true)
    element.addEventListener('touchcancel', onInput, true)
    element.addEventListener('click', onClick, true)
    return () => {
      clearTimeout(resetTimer)
      controller.off('sliderFirstMove', onSwipe)
      controller.off('touchEnd', onTouchEnd)
      element.removeEventListener('pointerdown', onInput, true)
      element.removeEventListener('keydown', onInput, true)
      element.removeEventListener('pointercancel', onInput, true)
      element.removeEventListener('touchcancel', onInput, true)
      element.removeEventListener('click', onClick, true)
    }
  }, [controller])

  const { alignLastSlideToStart: lastSlideAlignment, ...nativeSwiperProps } = contextSwiperProps
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
    'onSlidesUpdated': (swiper) => {
      alignLastSlideToStart(swiper, lastSlideAlignment)
    },
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
    swiperProps: mergeProps(nativeSwiperProps, swiperProps, filterDOMProps(rest as DOMProps)),
    slides,
    ref: swiperRef,
  }
}
