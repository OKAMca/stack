import { useRef, useState } from 'react'
import { VisuallyHidden } from 'react-aria'
import type { SwiperClass } from 'swiper/react'
import { SwiperControllerContextProvider } from '../../providers/Swiper'
import Box from '../Box'
import { CarouselNextNavigationButton, CarouselPrevNavigationButton } from './components/CarouselNavigationButton'
import CarouselSwiper from './components/CarouselSwiper'
import CarouselPagination from './components/pagination/CarouselPagination'
import type { TCarouselProps } from './interface'

const Carousel = (props: TCarouselProps) => {
  const {
    id,
    themeName = 'carousel',
    tokens,
    customTheme,
    slides,
    a11y,
    modules,
    prevButton: PrevButton = CarouselPrevNavigationButton,
    nextButton: NextButton = CarouselNextNavigationButton,
    onSwiper,
    onSlideChange,
    ...rest
  } = props
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)

  const { enabled: a11yEnabled = true, paginationGroupLabel = 'pagination', ...restOfA11y } = a11y ?? {}

  const hasNavigation = modules?.includes('Navigation')
  const hasPagination = modules?.includes('Pagination')

  const [controller, setController] = useState<SwiperClass>()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const slidesWithFallbacks = slides.map((slide, index) => ({
    ...slide,
    ariaLabel: slide.ariaLabel ?? `${index + 1} / ${slides.length}`,
  }))

  return (
    <Box themeName={`${themeName}.carouselWrapper`} tokens={tokens}>
      <SwiperControllerContextProvider controller={controller}>
        {hasNavigation && (
          <PrevButton
            themeName={`${themeName}.navigation.button`}
            tokens={{ ...tokens, order: 'prev' }}
            ref={prevButtonRef}
            aria-label={a11y?.prevSlideMessage}
            aria-controls={id}
          />
        )}
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
            slides={slidesWithFallbacks}
            paginationGroupLabel={paginationGroupLabel}
          />
        )}
        <CarouselSwiper
          themeName={themeName}
          tokens={tokens}
          id={id}
          slides={slidesWithFallbacks}
          onSwiper={(c) => {
            setController(c)
            onSwiper?.(c)
          }}
          onSlideChange={(c) => {
            setActiveIndex(c.activeIndex)
            onSlideChange?.(c)
          }}
          a11y={restOfA11y}
          modules={modules}
          {...rest}
        />
        {a11yEnabled && (
          <VisuallyHidden>
            <div aria-live="polite">
              {slidesWithFallbacks[activeIndex].title ?? slidesWithFallbacks[activeIndex].ariaLabel}
            </div>
          </VisuallyHidden>
        )}
      </SwiperControllerContextProvider>
    </Box>
  )
}

export default Carousel
