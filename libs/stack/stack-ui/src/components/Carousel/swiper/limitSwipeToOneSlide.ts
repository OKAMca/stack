import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption } from '../interface'

/** Bound viewport-wide gestures without changing the physical long-swipe threshold. */
export function limitSwipeToOneSlide(swiper: SwiperClass, enabled?: TCarouselLayoutOption): void {
  if (enabled == null)
    return

  const { params, originalParams, slidesGrid } = swiper
  const originalTouchRatio = originalParams.touchRatio ?? 1
  const originalLongSwipesRatio = originalParams.longSwipesRatio ?? 0.5
  params.touchRatio = originalTouchRatio
  params.longSwipesRatio = originalLongSwipesRatio

  if (!(typeof enabled === 'function' ? enabled(swiper) : enabled)
    || !swiper.isHorizontal()
    || typeof params.slidesPerView !== 'number'
    || params.slidesPerGroup !== 1
    || params.loop || params.centeredSlides || params.cssMode
    || params.centerInsufficientSlides || params.roundLengths
    || params.freeMode === true
    || (typeof params.freeMode === 'object' && params.freeMode.enabled)
    || (params.grid?.rows ?? 1) > 1
    || (typeof params.virtual === 'object' && params.virtual.enabled)
    || originalTouchRatio <= 0) {
    return
  }
  const [firstStart, secondStart] = slidesGrid
  if (firstStart == null || secondStart == null)
    return

  const stride = secondStart - firstStart
  const viewportWidth = swiper.el.ownerDocument.defaultView?.innerWidth ?? swiper.width
  if (stride <= 0 || viewportWidth <= 0)
    return

  params.touchRatio = Math.min(originalTouchRatio, stride / viewportWidth)
  params.longSwipesRatio = originalLongSwipesRatio * params.touchRatio / originalTouchRatio
}
