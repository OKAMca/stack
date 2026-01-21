'use client'

import type { TCarouselSwiperProps } from './interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import useThemeContext from '../../../providers/Theme/hooks'
import CarouselSlide from './CarouselSlide'
import { useCarouselSwiper } from './useCarouselSwiper'

function CarouselSwiper(props: TCarouselSwiperProps) {
  const {
    swiperProps: { a11y, ...rest },
    slides,
    ref,
  } = useCarouselSwiper(props)

  const { themeName = 'carousel', tokens, customTheme, children = slide => <CarouselSlide {...slide} /> } = props

  const swiperTheme = useThemeContext(`${themeName}.swiper.swiper`, tokens, customTheme)
  const swiperWrapperTheme = useThemeContext(`${themeName}.swiper.wrapper`, tokens)
  const slideTheme = useThemeContext(`${themeName}.slide.wrapper`, tokens)

  return (
    <Swiper {...rest} className={swiperTheme} wrapperClass={swiperWrapperTheme} ref={ref}>
      {typeof children === 'function'
        ? slides.map(slide => (
            <SwiperSlide key={`slide-${slide.id}`} className={slideTheme}>
              {children({ themeName: `${themeName}.slide`, tokens, ...slide })}
            </SwiperSlide>
          ))
        : children}
    </Swiper>
  )
}

export default CarouselSwiper
