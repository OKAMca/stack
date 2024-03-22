import type React from 'react'
import type { Dispatch, FunctionComponent, SetStateAction } from 'react'
import type { OverlayTriggerProps } from 'react-stately'
import type { TDefaultComponent } from '../../types/components'
import type { TButtonProps } from '../Button/interface'

export interface TLightboxProps extends OverlayTriggerProps, TDefaultComponent {
  label: string
  thumbnailContent: React.ReactNode
  closeButton?: FunctionComponent<TButtonProps>
  setOpen?: Dispatch<SetStateAction<boolean>>
}
