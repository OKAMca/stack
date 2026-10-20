import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption } from '../interface'
import { isLayoutOptionActive } from './isLayoutOptionActive'

/** Run after every Swiper layout pass, before it positions the active slide. */
export function alignLastSlideToStart(swiper: SwiperClass, enabled?: TCarouselLayoutOption): void {
  const { slidesGrid } = swiper
  // A single native snap means every card already fits: keep the rail locked.
  if (!isLayoutOptionActive(swiper, enabled) || slidesGrid.length < 2 || swiper.snapGrid.length < 2)
    return

  // Native Swiper trims trailing starts to keep the final card end-aligned.
  // Keep its measured starts, including intermediate cards, and expose enough
  // scroll distance for the last one without altering slidesPerView semantics.
  const previousLength = swiper.snapGrid.length
  swiper.snapGrid = [...slidesGrid]
  if (swiper.snapGrid.length !== previousLength)
    swiper.emit('snapGridLengthChange')
}
