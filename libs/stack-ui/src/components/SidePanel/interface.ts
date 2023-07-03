import type { HTMLAttributes } from 'react'
import type React from 'react'
import type { TDefaultComponent } from '../../types/components'

export interface ISidePanelProps extends HTMLAttributes<HTMLElement> {
  id: string
  children?: React.ReactNode
  closeBtnRender?: () => React.ReactNode
}

export type TSidePanelProps = ISidePanelProps & TDefaultComponent
