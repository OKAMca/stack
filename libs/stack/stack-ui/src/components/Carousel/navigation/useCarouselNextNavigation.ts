'use client'

import type { TButtonProps } from '../../Button/interface'
import type { TCarouselNavigation } from './interface'
import { mergeProps, usePress } from 'react-aria'
import { useCarousel } from '../../../providers/Carousel'
import { useCarouselEdge } from './useCarouselEdge'

export function useCarouselNextNavigation(props: TButtonProps): TCarouselNavigation {
  const { isDisabled: isDisabledProp, handlePress, ...rest } = props
  const { controller, nextNavigationRef, id } = useCarousel()
  const { params } = controller ?? {}
  const { loop, rewind } = params ?? {}
  const a11y = typeof params?.a11y === 'object' ? params.a11y : undefined

  const isEnd = useCarouselEdge('isEnd')
  // eslint-disable-next-line ts/prefer-nullish-coalescing -- boolean OR for disabled state logic
  const isDisabled = isDisabledProp || (!loop && !rewind && isEnd)

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
