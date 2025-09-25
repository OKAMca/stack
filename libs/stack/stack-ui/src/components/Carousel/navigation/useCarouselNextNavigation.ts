'use client'

/* eslint-disable @typescript-eslint/naming-convention */
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'

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
    slides && typeof slidesPerView === 'number' ? slides.length / slidesPerView : (slides?.length ?? 1),
  )

  const allowNavigateNext = slidesGroupIndex < slidesGroupLength
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
