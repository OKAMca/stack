import type { ReactElement, ReactNode, RefObject, SVGProps } from 'react'
import type { AriaPopoverProps, AriaPositionProps, FocusScopeProps, OverlayTriggerProps } from 'react-aria'
import type { OverlayTriggerProps as AriaOverlayTriggerProps, OverlayTriggerState } from 'react-stately'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

export interface TPopoverButtonProps<T = TToken>
  extends
    TDefaultComponent<T>,
    TButtonProps<T>,
    AriaOverlayTriggerProps,
    Omit<AriaPositionProps, 'targetRef' | 'overlayRef'>,
    OverlayTriggerProps,
    Pick<AriaPopoverProps, 'shouldCloseOnInteractOutside' | 'isKeyboardDismissDisabled'> {
  /**
   * @deprecated Pass button props directly to the component. `buttonProps.children` can now be passed as `label` prop.
   */
  buttonProps?: TButtonProps
  label: ReactNode
  children: ReactElement
}

export interface TPopoverProps<T = TToken>
  extends TDefaultComponent<T>, Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef'>, FocusScopeProps {
  state: OverlayTriggerState
  children: ReactElement | ReactElement[]
  arrow?: ReactElement<SVGProps<SVGSVGElement> & TDefaultComponent<T>>
  sizeRef?: RefObject<HTMLElement | null>
  popoverRef?: RefObject<HTMLElement | null>
  triggerRef: RefObject<HTMLElement | null>
}

export type PopoverOrientation = 'left' | 'right'
