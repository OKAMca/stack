'use client'

import type { TButtonProps } from '../../Button/interface'
import { ButtonWithForwardRef } from '../../Button'
import { useCarouselPrevNavigation } from './useCarouselPrevNavigation'

function CarouselPrevNavigation(props: TButtonProps) {
  const { children, themeName = 'carousel.navigation', tokens } = props
  const { navigationProps, ref, isDisabled } = useCarouselPrevNavigation(props)

  return (
    <ButtonWithForwardRef
      themeName={`${themeName}.button`}
      tokens={{ ...tokens, order: 'prev' }}
      {...navigationProps}
      ref={ref}
      isDisabled={isDisabled}
    >
      {children}
    </ButtonWithForwardRef>
  )
}

export default CarouselPrevNavigation
