import type { AriaDialogProps } from 'react-aria'

export interface TDialogProps extends AriaDialogProps {
  title?: React.ReactNode
  children: React.ReactNode
}
