import type { HTMLAttributes } from 'react'
import type React from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'

export interface ISidePanelProps extends HTMLAttributes<HTMLElement> {
  id: string
  children?: React.ReactNode
  closeBtnRender?: () => React.ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitionAnimation?: (props: TTransition) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition?: (props: TTransition) => JSX.Element
  onCloseCallBack?: () => void
}

export type TSidePanelProps<T = TToken> = ISidePanelProps & TDefaultComponent<T>
