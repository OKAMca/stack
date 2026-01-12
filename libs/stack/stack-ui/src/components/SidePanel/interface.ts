import type { ReactNode } from 'react'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent, TTransition } from '../../types/components'
import type { TModalAria } from '../Modal/interface'

export interface TSidePanelProps<T extends TToken> extends TDefaultComponent<T>, TModalAria {
  id: string
  children?: ReactNode
  closeBtnRender?: () => ReactNode
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TransitionAnimation?: (props: TTransition) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PanelTransition?: (props: TTransition) => JSX.Element
  /**
   * @deprecated Use `onOpenChange` instead
   */
  onCloseCallBack?: () => void
  onOpenChange?: (isOpen: boolean) => void
}
