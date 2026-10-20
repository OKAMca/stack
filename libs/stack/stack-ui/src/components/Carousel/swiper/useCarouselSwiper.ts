'use client'

import type { DOMProps } from '@react-types/shared'
import type { SwiperClass } from 'swiper/react'
import type { TCarouselSwiper, TCarouselSwiperProps } from './interface'
import { filterDOMProps } from '@react-aria/utils'
import { useEffect, useRef } from 'react'
import { mergeProps } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { alignLastSlideToStart } from './alignLastSlideToStart'
import { isLayoutOptionActive } from './isLayoutOptionActive'
import { resolveSwiperModules } from './resolveSwiperModules'
import { useSwipeLimit } from './useSwipeLimit'
import { useSwipePointerCapture } from './useSwipePointerCapture'

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
  useSwipePointerCapture(controller)

  const { alignLastSlideToStart: alignLastSlideToStartOption, limitSwipeToOneSlide: limitSwipeToOneSlideOption, ...nativeSwiperProps } = contextSwiperProps
  const a11y = typeof controller?.params?.a11y === 'object' ? controller.params.a11y : undefined
  const { slidesPerView, slidesPerGroup } = contextSwiperProps

  useSwipeLimit(controller, limitSwipeToOneSlideOption)

  // Depend on the resolved value, so an inline predicate does not re-layout
  // (and cut off a transition) on every render.
  const isAlignmentActive = controller != null && !controller.destroyed && isLayoutOptionActive(controller, alignLastSlideToStartOption)
  // Swiper's initial layout already applies the alignment; update only on later changes.
  const initializedControllerRef = useRef<SwiperClass>(undefined)
  useEffect(() => {
    if (controller == null || controller.destroyed)
      return
    if (initializedControllerRef.current === controller)
      controller.update()
    initializedControllerRef.current = controller
  }, [controller, isAlignmentActive])

  const importedModules = resolveSwiperModules(modules)

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
      alignLastSlideToStart(swiper, alignLastSlideToStartOption)
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
