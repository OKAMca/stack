'use client'

import type { TCarouselPaginationProps } from './interface'
import { FocusScope } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { BoxWithForwardRef } from '../../Box'
import { useCarouselPagination } from './useCarouselPagination'

function CarouselPagination(props: TCarouselPaginationProps) {
  const { themeName = 'carousel.pagination', tokens, children } = props
  const { paginationProps } = useCarouselPagination(props)
  const { swiper } = useCarousel()

  return (
    <BoxWithForwardRef themeName={`${themeName}.wrapper`} tokens={tokens} {...paginationProps}>
      <FocusScope>{typeof children === 'function' ? (swiper != null && children(swiper)) : children}</FocusScope>
    </BoxWithForwardRef>
  )
}

export default CarouselPagination
