'use client'

import { mergeProps } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import type { TCarouselPaginationFractionProps, TCarouselPaginationFraction } from './interface'

export function useCarouselPaginationFraction(props: TCarouselPaginationFractionProps): TCarouselPaginationFraction {
  const { startIndex = 1, ...rest } = props
  const { slides, activeIndex } = useCarousel()

  const total = slides.length
  const current = startIndex + activeIndex

  return {
    paginationFractionProps: mergeProps(
      {
        'aria-label': `${current} / ${total}`,
      },
      rest,
    ),
    current,
    total,
  }
}
