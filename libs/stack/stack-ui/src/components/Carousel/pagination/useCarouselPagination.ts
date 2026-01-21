'use client'

import type { TCarouselPagination, TCarouselPaginationProps } from './interface'
import { get } from 'radashi'
import { useCarousel } from '../../../providers/Carousel'

export function useCarouselPagination(props: TCarouselPaginationProps): TCarouselPagination {
  const { paginationGroupLabel } = props
  const { swiperProps } = useCarousel()

  return {
    paginationProps: {
      'role': 'group',
      'aria-label': get(props, 'aria-label') ?? paginationGroupLabel ?? swiperProps.a11y?.paginationGroupLabel,
    },
  }
}
