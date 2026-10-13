'use client'

import type { SwiperClass } from 'swiper/react'
import { useEffect } from 'react'

// Covers React Aria's 80ms fallback and delayed browser compatibility clicks.
const SWIPE_CLICK_WINDOW_MS = 350

export function useSwipeClickSuppression(controller: SwiperClass | undefined): void {
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
}
