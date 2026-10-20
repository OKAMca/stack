'use client'

import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { useCarouselEdge } from './useCarouselEdge'

export function useCarouselPrevNavigation(props: TButtonProps): TCarouselNavigation {
  const { isDisabled: isDisabledProp, handlePress, ...rest } = props
  const { controller, prevNavigationRef, id } = useCarousel()

  const { params } = controller ?? {}
  const a11y = typeof controller?.params?.a11y === 'object' ? controller.params.a11y : undefined
  const { loop, rewind } = params ?? {}

  const isBeginning = useCarouselEdge('isBeginning')
  // eslint-disable-next-line ts/prefer-nullish-coalescing -- boolean OR for disabled state logic
  const isDisabled = isDisabledProp || (!loop && !rewind && isBeginning)

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
