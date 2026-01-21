import type * as React from 'react'
import type { ReactNode } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TModalAria } from '../Modal/interface'

export interface TSidePanelProps<T extends TToken> extends TDefaultComponent<T>, TModalAria {
  id: string
  children?: ReactNode
  closeBtnRender?: () => ReactNode

  TransitionAnimation?: (_props: TTransition) => React.JSX.Element

  PanelTransition?: (_props: TTransition) => React.JSX.Element
  /**
   * @deprecated Use `onOpenChange` instead
   */
  onCloseCallBack?: () => void
  onOpenChange?: (_isOpen: boolean) => void
}
