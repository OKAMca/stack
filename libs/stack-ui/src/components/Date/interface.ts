import type { TDefaultComponent } from '../../types/components'

export type DateFormaTToken = 'short' | 'long'

export interface TDateProps extends TDefaultComponent {
  date: string
  dateFormat?: DateFormaTToken
}
