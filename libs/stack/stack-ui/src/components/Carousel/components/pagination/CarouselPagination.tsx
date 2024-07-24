import { FocusScope } from 'react-aria'
import Box from '../../../Box'
import type { TCarouselPaginationProps } from '../../interface'
import CarouselPaginationBullet from './CarouselPaginationBullet'

const CarouselPagination = (props: TCarouselPaginationProps) => {
  const { themeName, tokens, slides, activeIndex, paginationGroupLabel } = props

  return (
    <Box
      as="div"
      themeName={`${themeName}.wrapper`}
      tokens={tokens}
      {...{ role: 'group', 'aria-label': paginationGroupLabel }}
    >
      <FocusScope>
        {slides.map((_, index) => (
          <CarouselPaginationBullet
            key={JSON.stringify(_)}
            index={index}
            activeIndex={activeIndex}
            slides={slides}
            themeName={themeName}
            tokens={tokens}
          />
        ))}
      </FocusScope>
    </Box>
  )
}

export default CarouselPagination
