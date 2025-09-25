'use client'

/* eslint-disable @typescript-eslint/naming-convention */
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'

export function useCarouselPrevNavigation(props: TButtonProps): TCarouselNavigation {
  const { isDisabled: isDisabledProp, handlePress, ...rest } = props
  const { controller, prevNavigationRef, id, activeIndex } = useCarousel()

  const { params } = controller ?? {}
  const { a11y } = controller?.params ?? {}
  const { loop } = params ?? {}

  const allowNavigatePrev = activeIndex > 0
  const isDisabled = isDisabledProp || (!loop && !allowNavigatePrev)

  const { pressProps } = usePress({
    onPress: (e) => {
      controller?.slidePrev()
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
        'aria-label': a11y?.prevSlideMessage,
      },
      rest,
    ),
    ref: prevNavigationRef,
  }
}
