'use client'

import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption } from '../interface'
import { useEffect, useRef } from 'react'
import { isLayoutOptionActive } from './isLayoutOptionActive'

/**
 * Stop a dragged rail just before the next slide and at the previous one, so
 * Swiper's release logic can only reach a neighbor. Swiper's own touchRatio,
 * longSwipesRatio and edge resistance stay in effect.
 */
export function useSwipeLimit(controller: SwiperClass | undefined, option: TCarouselLayoutOption | undefined): void {
  const optionRef = useRef(option)
  useEffect(() => {
    optionRef.current = option
  })

  useEffect(() => {
    if (controller == null || controller.destroyed)
      return

    const swiper = controller
    // Converts between translate and rail position in both directions.
    const railPosition = (translate: number) => swiper.rtlTranslate ? translate : -translate
    let dragStart = 0
    // Swiper emits sliderMove, then sets the dragged translate in the same task.
    // Limit only that translate, so programmatic slides are never limited, even
    // when a canceled drag ends without touchEnd.
    let isApplyingDragMove = false
    const onDragStart = () => {
      dragStart = railPosition(swiper.translate)
    }
    const onDragMove = () => {
      isApplyingDragMove = true
      queueMicrotask(() => {
        isApplyingDragMove = false
      })
    }
    const onTranslate = () => {
      if (!isApplyingDragMove || !swiper.isHorizontal() || !isLayoutOptionActive(swiper, optionRef.current))
        return
      const { slidesGrid } = swiper
      const previous = slidesGrid.filter(position => position < dragStart - 0.5).at(-1)
      const next = slidesGrid.find(position => position > dragStart + 0.5)
      const position = railPosition(swiper.translate)
      let limited = position
      if (previous != null)
        limited = Math.max(limited, previous)
      // Stop 1px short: a fast swipe advances one slide past the slide it stops on.
      if (next != null)
        limited = Math.min(limited, next - 1)
      if (limited !== position)
        swiper.setTranslate(railPosition(limited))
    }
    swiper.on('sliderFirstMove', onDragStart)
    swiper.on('sliderMove', onDragMove)
    swiper.on('setTranslate', onTranslate)
    return () => {
      swiper.off('sliderFirstMove', onDragStart)
      swiper.off('sliderMove', onDragMove)
      swiper.off('setTranslate', onTranslate)
    }
  }, [controller])
}
