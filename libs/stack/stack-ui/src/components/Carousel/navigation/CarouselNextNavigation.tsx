'use client'

import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import { useCarouselNextNavigation } from './useCarouselNextNavigation'

const CarouselNextNavigation = (props: TButtonProps) => {
  const { children, themeName = 'carousel.navigation', tokens } = props
  const { navigationProps, ref, isDisabled } = useCarouselNextNavigation(props)

  return (
    <ButtonWithForwardRef
      themeName={`${themeName}.button`}
      tokens={{ ...tokens, order: 'next' }}
      {...navigationProps}
      ref={ref}
      isDisabled={isDisabled}
    >
      {children}
    </ButtonWithForwardRef>
  )
}

export default CarouselNextNavigation
