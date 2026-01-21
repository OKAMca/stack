'use client'

import type { TCarouselProps } from './interface'
import * as React from 'react'
import { CarouselContextProvider } from '../../providers/Carousel'
import { Box } from '../Box'
import CarouselA11yAnnouncer from './a11y/CarouselA11yAnnouncer'

function Carousel(props: TCarouselProps): React.JSX.Element {
  const { id, themeName = 'carousel', tokens, customTheme, slides, a11y, modules, children, ...rest } = props

  return (
    <Box themeName={`${themeName}.carouselWrapper`} tokens={tokens}>
      <CarouselContextProvider id={id} modules={modules} slides={slides} {...rest}>
        {children}
        <CarouselA11yAnnouncer />
      </CarouselContextProvider>
    </Box>
  )
}

export default Carousel
