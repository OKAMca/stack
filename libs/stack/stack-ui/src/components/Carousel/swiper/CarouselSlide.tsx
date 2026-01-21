'use client'

import type { TCarouselSlideProps } from './interface'
import { Box } from '../../Box'
import { Typography } from '../../Typography'
import { useCarouselSlide } from './useCarouselSlide'

function CarouselSlide(props: TCarouselSlideProps) {
  const { themeName = 'carousel.slide', title, tokens, children, customTheme } = props
  const { slideProps, titleProps, isActive, isVisible, isPrev, isNext } = useCarouselSlide(props)

  const carouselSlideTokens = { ...tokens, isActive, isVisible, isPrev, isNext }

  return (
    <Box {...slideProps} themeName={`${themeName}.container`} tokens={carouselSlideTokens} customTheme={customTheme}>
      {(title != null && title !== '') && (
        <Typography {...titleProps} themeName={`${themeName}.title`} tokens={carouselSlideTokens}>
          {title}
        </Typography>
      )}
      {typeof children === 'function' ? children({ themeName, tokens, isActive, isVisible, isPrev, isNext }) : children}
    </Box>
  )
}

export default CarouselSlide
