'use client'

import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'

export function useCarouselPrevNavigation(props: TButtonProps): TCarouselNavigation {
  const { isDisabled: isDisabledProp, handlePress, ...rest } = props
  const { controller, prevNavigationRef, id, activeIndex } = useCarousel()

  const { params } = controller ?? {}
  const { a11y } = controller?.params ?? {}
  const { loop } = params ?? {}

  const allowNavigatePrev = activeIndex > 0
  // eslint-disable-next-line ts/prefer-nullish-coalescing -- boolean OR for disabled state logic
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
