import type { DOMAttributes } from '@react-types/shared'
import type { RefObject } from 'react'
import type { TButtonProps } from '../../Button/interface'

export type TCarouselNavigationButtonComponent = React.ForwardRefExoticComponent<
  TButtonProps & React.RefAttributes<HTMLButtonElement & HTMLAnchorElement>
>
export type TCarouselNavigationButtonProps = TButtonProps & {
  onSubmit?: () => void
}
export interface TCarouselNavigation {
  navigationProps: TButtonProps & DOMAttributes
  ref: RefObject<HTMLButtonElement & HTMLAnchorElement>
  isDisabled: boolean
}
