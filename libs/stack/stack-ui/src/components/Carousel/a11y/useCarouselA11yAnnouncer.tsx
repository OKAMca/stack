'use client'

import type { TCarouselA11yAnnouncerProps } from './interface'
import { mergeProps } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'

export function useCarouselA11yAnnouncer(props: TCarouselA11yAnnouncerProps) {
  const { controller, activeIndex, slides } = useCarousel()
  const { params } = controller ?? {}
  const a11y = typeof params?.a11y === 'object' ? params.a11y : (params?.a11y === true ? { enabled: true } : undefined)

  return {
    a11y,
    announcerProps: mergeProps(props, {
      'aria-live': 'polite',
      'children': slides?.[activeIndex]?.title ?? slides?.[activeIndex]?.ariaLabel,
    }),
  }
}
