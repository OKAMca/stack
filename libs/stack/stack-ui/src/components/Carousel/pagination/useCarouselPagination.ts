/* eslint-disable @typescript-eslint/naming-convention */
import { get } from 'radashi'
import { useCarousel } from '../../../providers/Carousel'
import type { TCarouselPagination, TCarouselPaginationProps } from './interface'

export function useCarouselPagination(props: TCarouselPaginationProps): TCarouselPagination {
  const { paginationGroupLabel } = props
  const { swiperProps } = useCarousel()

  return {
    paginationProps: {
      role: 'group',
      'aria-label': get(props, 'aria-label') ?? paginationGroupLabel ?? swiperProps.a11y?.paginationGroupLabel,
    },
  }
}
