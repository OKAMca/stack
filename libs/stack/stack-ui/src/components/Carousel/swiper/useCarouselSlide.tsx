'use client'

import type { TCarouselSlide, TCarouselSlideProps } from './interface'
import { isEmpty } from 'radashi'
import { useRef } from 'react'
import { mergeProps } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'

export function useCarouselSlide(props: TCarouselSlideProps): TCarouselSlide {
  const {
    title,
    id,
    ariaLabel: legacyAriaLabel,
    'aria-label': ariaLabel,
    children,
    swiperSlideIndex,
    swiper,
    ...rest
  } = props
  const a11yParams = typeof swiper?.params?.a11y === 'object' ? swiper.params.a11y : undefined
  const { itemRoleDescriptionMessage = 'slide', slideRole = 'group' } = a11yParams ?? {}
  const hasTitle = !isEmpty(title)
  const { activeIndex, controller } = useCarousel() ?? {}
  const slidesPerView = typeof controller?.params?.slidesPerView === 'number' ? controller.params.slidesPerView : 1
  const ref = useRef<HTMLElement>(null)

  const isActive = swiperSlideIndex === activeIndex
  const isVisible = swiperSlideIndex != null && activeIndex != null && swiperSlideIndex >= activeIndex && swiperSlideIndex < activeIndex + slidesPerView
  const isPrev = swiperSlideIndex != null && activeIndex != null && swiperSlideIndex === activeIndex - 1
  const isNext = swiperSlideIndex != null && activeIndex != null && swiperSlideIndex === activeIndex + slidesPerView

  return {
    ref,
    slideProps: mergeProps(rest, {
      ...(hasTitle ? { 'aria-labelledby': id } : { 'aria-label': legacyAriaLabel ?? ariaLabel }),
      'aria-roledescription': itemRoleDescriptionMessage ?? undefined,
      'role': slideRole,
      'inert': !isVisible,
    }),
    titleProps: {},
    isActive,
    isVisible,
    isPrev,
    isNext,
  }
}
