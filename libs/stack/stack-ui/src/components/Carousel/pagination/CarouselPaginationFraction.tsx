'use client'

import Box from '../../Box'
import Typography from '../../Typography'
import type { TCarouselPaginationFractionProps } from './interface'
import { useCarouselPaginationFraction } from './useCarouselPaginationFraction'

const CarouselPaginationFraction = (props: TCarouselPaginationFractionProps) => {
  const { themeName = 'carousel.pagination', tokens, children = '/', customTheme } = props
  const { paginationFractionProps, current, total } = useCarouselPaginationFraction(props)
  return (
    <Box
      {...paginationFractionProps}
      themeName={`${themeName}.fraction.wrapper`}
      tokens={tokens}
      customTheme={customTheme}
    >
      <Typography themeName={`${themeName}.fraction.current`} tokens={tokens}>
        {current}
      </Typography>
      {children && (
        <Typography themeName={`${themeName}.fraction.separator`} tokens={tokens}>
          {children}
        </Typography>
      )}
      <Typography themeName={`${themeName}.fraction.total`} tokens={tokens}>
        {total}
      </Typography>
    </Box>
  )
}

export default CarouselPaginationFraction
