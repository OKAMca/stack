'use client'

import type { SwiperClass } from 'swiper/react'
import { useEffect } from 'react'

/**
 * Give the carousel ownership of a pointer once Swiper starts a drag.
 * React Aria's usePress then sees pointerup outside the pressed card and
 * cancels the press, so a drag cannot activate a link through its delayed
 * click fallback. Taps, keyboard and virtual activation are untouched.
 */
export function useSwipePointerCapture(controller: SwiperClass | undefined): void {
  useEffect(() => {
    if (controller == null)
      return

    const element = controller.el
    let pointerId: number | undefined
    const onPointerDown = (event: PointerEvent) => {
      pointerId = event.pointerId
    }
    const onSwipe = () => {
      if (pointerId == null || element.hasPointerCapture(pointerId))
        return
      try {
        element.setPointerCapture(pointerId)
      }
      catch {
        // The pointer was already released; there is no press left to cancel.
      }
    }
    element.addEventListener('pointerdown', onPointerDown, true)
    controller.on('sliderFirstMove', onSwipe)
    return () => {
      element.removeEventListener('pointerdown', onPointerDown, true)
      controller.off('sliderFirstMove', onSwipe)
    }
  }, [controller])
}
