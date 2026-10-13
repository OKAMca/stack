import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption } from '../interface'
import { isLayoutOptionActive } from './isLayoutOptionActive'

interface TSwipeOverride {
  /** Consumer values in effect before the override. */
  touchRatio: number
  longSwipesRatio: number
  /** Values written by the override, to detect later consumer updates. */
  appliedTouchRatio: number
  appliedLongSwipesRatio: number
}

const overrides = new WeakMap<SwiperClass, TSwipeOverride>()

/** Bound viewport-wide gestures without changing the physical long-swipe threshold. */
export function limitSwipeToOneSlide(swiper: SwiperClass, enabled?: TCarouselLayoutOption): void {
  const { params, slidesGrid } = swiper
  const override = overrides.get(swiper)
  if (enabled == null && override == null)
    return

  // swiper/react writes prop updates to params only. A value that differs from
  // the one written here is a consumer update and becomes the new base.
  const touchRatio = override != null && params.touchRatio === override.appliedTouchRatio
    ? override.touchRatio
    : params.touchRatio ?? 1
  const longSwipesRatio = override != null && params.longSwipesRatio === override.appliedLongSwipesRatio
    ? override.longSwipesRatio
    : params.longSwipesRatio ?? 0.5
  params.touchRatio = touchRatio
  params.longSwipesRatio = longSwipesRatio
  overrides.delete(swiper)

  if (!isLayoutOptionActive(swiper, enabled) || !swiper.isHorizontal() || touchRatio <= 0)
    return
  const [firstStart, secondStart] = slidesGrid
  if (firstStart == null || secondStart == null)
    return

  const stride = secondStart - firstStart
  const viewportWidth = swiper.el.ownerDocument.defaultView?.innerWidth ?? swiper.width
  if (stride <= 0 || viewportWidth <= 0)
    return

  params.touchRatio = Math.min(touchRatio, stride / viewportWidth)
  params.longSwipesRatio = longSwipesRatio * params.touchRatio / touchRatio
  overrides.set(swiper, {
    touchRatio,
    longSwipesRatio,
    appliedTouchRatio: params.touchRatio,
    appliedLongSwipesRatio: params.longSwipesRatio,
  })
}
