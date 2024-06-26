'use client'

import React, { useState } from 'react'
import type { PressEvent } from 'react-aria'
import type Swiper from 'swiper'
import { Navigation, Mousewheel, Keyboard, Pagination, Autoplay, A11y } from 'swiper/modules'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import useThemeContext from '../../providers/Theme/hooks'
import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import type { TCarouselButtonProps, TCarouselProps } from './interface'

const CarouselButton = (props: TCarouselButtonProps) => {
  const { navigationButton, icon, themeName = 'carousel', tokens, id, swiperFn } = props
  const onKeyDown = (key: React.KeyboardEvent | PressEvent) => {
    if (('pointerType' in key && key.pointerType === 'keyboard') || ('code' in key && key.code === 'Enter'))
      swiperFn?.()
  }
  return navigationButton ? (
    React.cloneElement(navigationButton, {
      onKeyDown,
      handlePress: onKeyDown,
    })
  ) : (
    <Button themeName={`${themeName}.navigationButtons`} tokens={{ ...tokens, className: id }} handlePress={onKeyDown}>
      <Icon icon={icon} />
    </Button>
  )
}

const Carousel = (props: TCarouselProps) => {
  const { id, slides, children, navigationButtons, themeName = 'carousel', tokens, customTheme, ...rest } = props
  const showNavigation = slides && slides?.length > 1

  const { navigation, slidesPerView } = props

  const swiperTheme = useThemeContext(`${themeName}.swiper`, tokens)
  const swiperWrapperTheme = useThemeContext(`${themeName}.swiperWrapper`, tokens)
  const slideWrapperTheme = useThemeContext(`${themeName}.slideWrapper`, tokens)

  const [swiper, setSwiper] = useState<Swiper>()

  return (
    <Box themeName={`${themeName}.container`} tokens={tokens} customTheme={customTheme} {...rest}>
      {showNavigation && navigation && (
        <CarouselButton
          themeName={themeName}
          tokens={tokens}
          navigationButton={navigationButtons?.leftButton}
          id={`button-prev-${id}`}
          icon="ArrowLeft"
          swiperFn={() => swiper?.slidePrev()}
          swiper={swiper}
        />
      )}
      <SwiperComponent
        modules={[Navigation, Mousewheel, Keyboard, Pagination, Autoplay, A11y]}
        {...rest}
        navigation={{
          prevEl: `.button-prev-${id}`,
          nextEl: `.button-next-${id}`,
          disabledClass: `button-disabled`,
        }}
        onSwiper={setSwiper}
        wrapperClass={swiperWrapperTheme}
        className={swiperTheme}
        mousewheel
        keyboard
        watchOverflow
        slidesPerView={slidesPerView ?? 1}
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className={slideWrapperTheme}>
              <Box themeName={`${themeName}.slideContainer`} tokens={tokens}>
                {slide.child}
              </Box>
            </SwiperSlide>
          )
        })}
      </SwiperComponent>
      {showNavigation && navigation && (
        <CarouselButton
          themeName={themeName}
          tokens={tokens}
          navigationButton={navigationButtons?.rightButton}
          id={`button-next-${id}`}
          icon="ArrowRight"
          swiperFn={() => swiper?.slideNext()}
          swiper={swiper}
        />
      )}
      {children}
    </Box>
  )
}

export default Carousel
