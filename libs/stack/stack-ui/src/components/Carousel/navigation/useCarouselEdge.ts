'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { useCarousel } from '../../../providers/Carousel'

/** Read actual scroll boundaries, including snaps that keep the active slide. */
export function useCarouselEdge(edge: 'isBeginning' | 'isEnd'): boolean {
  const { controller } = useCarousel()
  const subscribe = useCallback((notify: () => void) => {
    controller?.on('progress', notify)
    return () => {
      controller?.off('progress', notify)
    }
  }, [controller])
  return useSyncExternalStore(subscribe, () => controller?.[edge] ?? true, () => true)
}
