import type { AriaDialogProps } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'

export interface TDialogProps extends AriaDialogProps, TDefaultComponent {
  title?: React.ReactNode
  children: React.ReactNode
}
