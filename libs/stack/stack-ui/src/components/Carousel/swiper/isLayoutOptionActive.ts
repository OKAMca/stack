import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption } from '../interface'

/**
 * Resolve a carousel layout option against the current Swiper params.
 * Layout options only support numeric slidesPerView, slidesPerGroup=1 and a
 * single row in the standard transform-based slider without free mode or
 * slide offsets.
 */
export function isLayoutOptionActive(swiper: SwiperClass, option?: TCarouselLayoutOption): boolean {
  const { params } = swiper
  if (!(typeof option === 'function' ? option(swiper) : option))
    return false
  return typeof params.slidesPerView === 'number'
    && params.slidesPerGroup === 1
    && !params.loop && !params.centeredSlides && !params.cssMode
    && !params.centerInsufficientSlides && !params.roundLengths
    && (params.slidesOffsetBefore ?? 0) === 0 && (params.slidesOffsetAfter ?? 0) === 0
    && params.freeMode !== true
    && !(typeof params.freeMode === 'object' && params.freeMode.enabled)
    && (params.grid?.rows ?? 1) <= 1
    && !(typeof params.virtual === 'object' && params.virtual.enabled)
}
