'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { useCarousel } from '../../../providers/Carousel'

/**
 * Read actual scroll boundaries, including snaps that keep the active slide.
 * Before Swiper initializes (and during SSR) the carousel is at its first
 * slide: previous is at its edge, next is not, matching the index-based state.
 */
export function useCarouselEdge(edge: 'isBeginning' | 'isEnd'): boolean {
  const initialEdge = edge === 'isBeginning'
  const { controller } = useCarousel()
  const subscribe = useCallback((notify: () => void) => {
    controller?.on('progress', notify)
    return () => {
      controller?.off('progress', notify)
    }
  }, [controller])
  return useSyncExternalStore(subscribe, () => controller?.[edge] ?? initialEdge, () => initialEdge)
}
