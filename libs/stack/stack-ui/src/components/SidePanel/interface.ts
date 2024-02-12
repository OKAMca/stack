import type { HTMLAttributes } from 'react'
import type React from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface ISidePanelProps extends HTMLAttributes<HTMLElement> {
  id: string
  children?: React.ReactNode
  closeBtnRender?: () => React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitionAnimation?: (props: unknown) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition?: (props: unknown) => JSX.Element
  onCloseCallBack?: () => void
}

export type TSidePanelProps = ISidePanelProps & TDefaultComponent
