import { Navigation, Mousewheel, Keyboard, Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useThemeContext from '../../providers/Theme/hooks'
import Button from '../Button'
import Icon from '../Icon'
import type { TCarouselProps } from './interface'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import 'swiper/css/keyboard'

const Carousel = (props: TCarouselProps) => {
  const { id, slides, children, navigationButtons, themeName = 'carousel', tokens, customTheme, ...rest } = props
  const showNavigation = slides && slides?.length > 1

  const { navigation, slidesPerView } = props

  const containerTheme = useThemeContext(`${themeName}.container`, { ...tokens }, customTheme)
  const slideContainerTheme = useThemeContext(`${themeName}.slideContainer`, { ...tokens }, customTheme)

  return (
    <div className={containerTheme} {...rest}>
      {showNavigation && navigation && (
        <div className={`button-prev-${id}`}>
          {navigationButtons?.leftButton ?? (
            <Button themeName={`${themeName}.navigationButtons`} tokens={{ ...tokens }}>
              <Icon icon="ArrowLeft" />
            </Button>
          )}
        </div>
      )}
      <Swiper
        modules={[Navigation, Mousewheel, Keyboard, Pagination, Autoplay, A11y]}
        {...rest}
        navigation={{
          prevEl: `.button-prev-${id}`,
          nextEl: `.button-next-${id}`,
          disabledClass: `button-disabled`,
        }}
        mousewheel
        keyboard
        watchOverflow
        slidesPerView={slidesPerView ?? 1}
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className={slideContainerTheme}>{slide.child}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {showNavigation && navigation && (
        <div className={`button-next-${id}`}>
          {navigationButtons?.rightButton ?? (
            <Button themeName={`${themeName}.navigationButtons`} tokens={{ ...tokens }}>
              <Icon icon="ArrowRight" />
            </Button>
          )}
        </div>
      )}

      {children}
    </div>
  )
}

export default Carousel
