'use client'

import type { RefObject } from 'react'
import type { Swiper } from 'swiper/types'
import type { TCarouselSlide, TCarouselSlideProps } from './interface'
import { isEmpty } from 'radashi'
import { useMemo, useRef } from 'react'
import { mergeProps } from 'react-aria'

function getClasses(swiper: Swiper | undefined, ref: RefObject<HTMLElement | null>) {
  if (ref.current == null || swiper == null)
    return []
  const { slideClass = 'swiper-slide' } = swiper.params
  const classes = ref.current?.className.split(' ').filter((className) => {
    return className.indexOf('swiper-slide') === 0 || className.indexOf(slideClass) === 0
  })
  return classes
}

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
  const { itemRoleDescriptionMessage = 'slide', slideRole = 'group' } = swiper?.params?.a11y ?? {}
  const hasTitle = !isEmpty(title)
  const ref = useRef<HTMLElement>(null)

  const swiperSlide = useMemo(() => {
    const classes = getClasses(swiper, ref)
    return {
      isActive: classes?.includes('swiper-slide-active'),
      isVisible: classes?.includes('swiper-slide-visible'),
      isPrev: classes?.includes('swiper-slide-prev'),
      isNext: classes?.includes('swiper-slide-next'),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ref.current triggers recalc when DOM element attaches; ref object is stable
  }, [ref.current])

  return {
    ref,
    slideProps: mergeProps(rest, {
      ...(hasTitle ? { 'aria-labelledby': id } : { 'aria-label': legacyAriaLabel ?? ariaLabel }),
      'aria-roledescription': itemRoleDescriptionMessage ?? undefined,
      'role': slideRole,
      'inert': `!${swiperSlide.isVisible}`,
    }),
    titleProps: {},
    ...swiperSlide,
  }
}
