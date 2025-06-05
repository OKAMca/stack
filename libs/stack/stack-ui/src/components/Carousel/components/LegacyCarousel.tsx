'use client'

import { useRef } from 'react'
import { useCarousel } from '../../../providers/Carousel'
import CarouselA11yAnnouncer from '../a11y/CarouselA11yAnnouncer'
import type { TLegacyCarouselProps } from '../interface'
import {
  LegacyCarouselPrevNavigationButton,
  LegacyCarouselNextNavigationButton,
} from '../navigation/LegacyCarouselNavigationButton'
import CarouselPagination from '../pagination/CarouselPagination'
import CarouselPaginationBullet from '../pagination/CarouselPaginationBullet'
import CarouselSlide from '../swiper/CarouselSlide'
import CarouselSwiper from '../swiper/CarouselSwiper'

const LegacyCarousel = (props: TLegacyCarouselProps) => {
  const {
    id,
    themeName = 'carousel',
    tokens,
    customTheme,
    slides,
    a11y,
    modules,
    prevButton: PrevButton = LegacyCarouselPrevNavigationButton,
    nextButton: NextButton = LegacyCarouselNextNavigationButton,
    onSlideChange,
    children = (slide) => <CarouselSlide {...slide} />,
    ...rest
  } = props
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  const { controller } = useCarousel()
  const { activeIndex = 0 } = controller ?? {}

  const { paginationGroupLabel = 'pagination' } = a11y ?? {}

  const hasNavigation = modules?.includes('Navigation')
  const hasPagination = modules?.includes('Pagination')

  const ariaSlides = slides.map((slide, index) => ({
    ...slide,
    ariaLabel: slide.ariaLabel ?? `${index + 1} / ${slides.length}`,
  }))

  return (
    <>
      {hasNavigation && (
        <PrevButton
          themeName={`${themeName}.navigation.button`}
          tokens={{ ...tokens, order: 'prev' }}
          ref={prevButtonRef}
          aria-label={a11y?.prevSlideMessage}
          aria-controls={id}
        />
      )}
      <CarouselSwiper themeName={themeName} tokens={tokens} {...rest}>
        {children}
      </CarouselSwiper>
      {hasNavigation && (
        <NextButton
          themeName={`${themeName}.navigation.button`}
          tokens={{ ...tokens, order: 'next' }}
          ref={nextButtonRef}
          aria-label={a11y?.nextSlideMessage}
          aria-controls={id}
        />
      )}
      {hasPagination && (
        <CarouselPagination
          themeName={`${themeName}.pagination`}
          tokens={tokens}
          activeIndex={activeIndex}
          slides={ariaSlides}
          paginationGroupLabel={paginationGroupLabel}
        >
          {slides.map((_, index) => (
            <CarouselPaginationBullet
              key={JSON.stringify(_)}
              index={index}
              activeIndex={activeIndex}
              slides={slides}
              themeName={`${themeName}.pagination`}
              tokens={tokens}
            />
          ))}
        </CarouselPagination>
      )}
      <CarouselA11yAnnouncer />
    </>
  )
}

export default LegacyCarousel
