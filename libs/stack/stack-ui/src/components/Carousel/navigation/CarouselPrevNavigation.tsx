import { ButtonWithForwardRef } from '../../Button'
import type { TButtonProps } from '../../Button/interface'
import { useCarouselPrevNavigation } from './useCarouselPrevNavigation'

const CarouselPrevNavigation = (props: TButtonProps) => {
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
