import type { SwiperClass } from 'swiper/react'
import type { TLastSlideAlignment } from '../interface'

/** Run after every Swiper layout pass, before it positions the active slide. */
export function alignLastSlideToStart(swiper: SwiperClass, enabled?: TLastSlideAlignment): void {
  const { params, slidesGrid } = swiper
  if (!(typeof enabled === 'function' ? enabled(swiper) : enabled)
    || typeof params.slidesPerView !== 'number'
    || params.slidesPerGroup !== 1
    || params.loop || params.centeredSlides || params.cssMode
    || (params.grid?.rows ?? 1) > 1
    || (typeof params.virtual === 'object' && params.virtual.enabled)) {
    return
  }
  if (slidesGrid.length < 2)
    return

  // Native Swiper trims trailing starts to keep the final card end-aligned.
  // Keep its measured starts, including intermediate cards, and expose enough
  // scroll distance for the last one without altering slidesPerView semantics.
  const previousLength = swiper.snapGrid.length
  swiper.snapGrid = [...slidesGrid]
  if (swiper.snapGrid.length !== previousLength)
    swiper.emit('snapGridLengthChange')
}
