'use client'

import { FocusScope } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { BoxWithForwardRef } from '../../Box'
import type { TCarouselPaginationProps } from './interface'
import { useCarouselPagination } from './useCarouselPagination'

const CarouselPagination = (props: TCarouselPaginationProps) => {
  const { themeName = 'carousel.pagination', tokens, children } = props
  const { paginationProps } = useCarouselPagination(props)
  const { swiper } = useCarousel()

  return (
    <BoxWithForwardRef themeName={`${themeName}.wrapper`} tokens={tokens} {...paginationProps}>
      <FocusScope>{typeof children === 'function' ? swiper && children(swiper) : children}</FocusScope>
    </BoxWithForwardRef>
  )
}

export default CarouselPagination
