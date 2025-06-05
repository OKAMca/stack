'use client'

import { CarouselContextProvider } from '../../providers/Carousel'
import Box from '../Box'
import CarouselA11yAnnouncer from './a11y/CarouselA11yAnnouncer'
import LegacyCarousel from './components/LegacyCarousel'
import type { TCarouselProps, TLegacyCarouselProps } from './interface'
import CarouselSlide from './swiper/CarouselSlide'
import type { TCarouselSlideProps } from './swiper/interface'

function isLegacy(props: TCarouselProps | TLegacyCarouselProps): props is TLegacyCarouselProps {
  const { children } = props
  return !!('legacyBehavior' in props && props.legacyBehavior && children && typeof children === 'function')
}

function Carousel(props: TCarouselProps & TLegacyCarouselProps): JSX.Element
function Carousel(props: TCarouselProps): JSX.Element
function Carousel(props: TCarouselProps | TLegacyCarouselProps): JSX.Element {
  const {
    id,
    themeName = 'carousel',
    tokens,
    customTheme,
    slides,
    a11y,
    modules,
    children = (slideProps: TCarouselSlideProps) => <CarouselSlide {...slideProps} />,
    ...rest
  } = props

  const carouselRender = () => {
    if (isLegacy(props)) {
      const { children: legacyChildren, ...restProps } = props
      return (
        <LegacyCarousel {...restProps} themeName={themeName} legacyBehavior>
          {legacyChildren}
        </LegacyCarousel>
      )
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>
  }

  return (
    <Box themeName={`${themeName}.carouselWrapper`} tokens={tokens}>
      <CarouselContextProvider id={id} modules={modules} slides={slides} {...rest}>
        {carouselRender()}
        <CarouselA11yAnnouncer />
      </CarouselContextProvider>
    </Box>
  )
}

export default Carousel
