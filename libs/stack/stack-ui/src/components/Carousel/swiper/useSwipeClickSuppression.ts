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
    let gestureTarget: EventTarget | null = null
    let resetTimer: ReturnType<typeof setTimeout> | undefined
    const onGestureStart = (_swiper: SwiperClass, event: Event) => {
      gestureTarget = event.target
    }
    const onSwipe = () => {
      suppressSwipeClick = true
    }
    const resetSuppression = () => {
      clearTimeout(resetTimer)
      suppressSwipeClick = false
    }
    // The delayed click targets the pressed element; unrelated controls stay clickable.
    const isGestureClick = ({ target }: MouseEvent) =>
      gestureTarget instanceof Node && target instanceof Node
      && (target.contains(gestureTarget) || gestureTarget.contains(target))
    const onTouchEnd = () => {
      if (suppressSwipeClick) {
        clearTimeout(resetTimer)
        resetTimer = setTimeout(resetSuppression, SWIPE_CLICK_WINDOW_MS)
      }
    }
    const onClick = (event: MouseEvent) => {
      // React Aria can synthesize a click after Swiper has reset allowClick.
      // Bound suppression so a gesture without a click cannot swallow a later
      // virtual activation that has no preceding pointerdown or keydown.
      if (suppressSwipeClick && controller.params.preventClicks && isGestureClick(event)) {
        resetSuppression()
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }
    const element = controller.el
    controller.on('touchStart', onGestureStart)
    controller.on('sliderFirstMove', onSwipe)
    controller.on('touchEnd', onTouchEnd)
    element.addEventListener('pointerdown', resetSuppression, true)
    element.addEventListener('keydown', resetSuppression, true)
    element.addEventListener('pointercancel', resetSuppression, true)
    element.addEventListener('touchcancel', resetSuppression, true)
    element.addEventListener('click', onClick, true)
    return () => {
      clearTimeout(resetTimer)
      controller.off('touchStart', onGestureStart)
      controller.off('sliderFirstMove', onSwipe)
      controller.off('touchEnd', onTouchEnd)
      element.removeEventListener('pointerdown', resetSuppression, true)
      element.removeEventListener('keydown', resetSuppression, true)
      element.removeEventListener('pointercancel', resetSuppression, true)
      element.removeEventListener('touchcancel', resetSuppression, true)
      element.removeEventListener('click', onClick, true)
    }
  }, [controller])
}
