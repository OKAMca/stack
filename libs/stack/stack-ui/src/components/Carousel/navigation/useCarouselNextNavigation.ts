'use client'

import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'

export function useCarouselNextNavigation(props: TButtonProps): TCarouselNavigation {
  const { isDisabled: isDisabledProp, handlePress, ...rest } = props
  const { controller, nextNavigationRef, id, activeIndex } = useCarousel()
  const { params, slides } = controller ?? {}
  const { slidesPerView, loop } = params ?? {}
  const { a11y } = params ?? {}

  const slidesGroupIndex = Math.round(
    typeof slidesPerView === 'number' ? (activeIndex + 1) / slidesPerView : activeIndex,
  )
  const slidesGroupLength = Math.round(
    slides != null && typeof slidesPerView === 'number' ? slides.length / slidesPerView : (slides?.length ?? 1),
  )

  const allowNavigateNext = slidesGroupIndex < slidesGroupLength
  // eslint-disable-next-line ts/prefer-nullish-coalescing -- boolean OR for disabled state logic
  const isDisabled = isDisabledProp || (!loop && !allowNavigateNext)

  const { pressProps } = usePress({
    onPress: (e) => {
      controller?.slideNext()
      handlePress?.(e)
    },
    isDisabled,
  })

  return {
    isDisabled,
    navigationProps: mergeProps(
      pressProps,
      {
        'aria-disabled': isDisabled,
        'aria-controls': id,
        'aria-label': a11y?.nextSlideMessage,
      },
      rest,
    ),
    ref: nextNavigationRef,
  }
}
