import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import type { AriaButtonProps } from 'react-aria'
import type { TButtonProps } from '../../components/Button/interface'

type TTriggerProps = Omit<AriaButtonProps, 'onPress'> & Pick<TButtonProps, 'handlePress'>

export interface TLabelledOverlayAria {
  triggerProps: TTriggerProps
  /**
   * @deprecated Use `triggerProps` instead
   */
  openTriggerProps: TTriggerProps
  labelProps: DOMProps
  overlayProps: DOMProps & Pick<AriaLabelingProps, 'aria-labelledby'>
}
