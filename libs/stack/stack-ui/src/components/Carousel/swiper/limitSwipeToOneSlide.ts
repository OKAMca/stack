import type { SwiperClass } from 'swiper/react'
import type { TCarouselLayoutOption, TSwiperProps } from '../interface'
import { isLayoutOptionActive } from './isLayoutOptionActive'

const overrides = new WeakSet<SwiperClass>()

/** Bound viewport-wide gestures without changing the physical long-swipe threshold. */
export function limitSwipeToOneSlide(
  swiper: SwiperClass,
  enabled: TCarouselLayoutOption | undefined,
  { touchRatio = 1, longSwipesRatio = 0.5 }: Pick<TSwiperProps, 'touchRatio' | 'longSwipesRatio'>,
): void {
  const { params, slidesGrid } = swiper
  if (enabled == null && !overrides.has(swiper))
    return

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
  overrides.add(swiper)
}
