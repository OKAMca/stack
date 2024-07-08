'use client'

import { useSwiperSlide } from 'swiper/react'
import Box from '../../Box'
import Typography from '../../Typography'
import type { TCarouselSlideProps } from '../interface'

const CarouselSlide = (props: TCarouselSlideProps) => {
  const { themeName, title, tokens, id, children } = props
  const { isActive } = useSwiperSlide()

  const carouselSlideTokens = { ...tokens, isActive }

  return (
    <Box themeName={`${themeName}.container`} tokens={carouselSlideTokens} {...(!isActive ? { inert: 'true' } : {})}>
      {title && (
        <Typography themeName={`${themeName}.title`} tokens={carouselSlideTokens} {...{ id }}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  )
}

export default CarouselSlide
