import type { ReactNode } from 'react'
import type { AriaDialogProps } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'

export interface TDialogAria extends AriaDialogProps {
  title?: ReactNode
}

export interface TDialogProps extends TDialogAria, TDefaultComponent {
  children: React.ReactNode
}
