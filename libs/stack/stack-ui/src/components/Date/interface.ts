import type { DateFormatterOptions } from 'react-aria'
import type { TDefaultComponent } from '../../types/components'

export interface TDateProps extends TDefaultComponent {
  date: string
  dateFormatterOptions?: DateFormatterOptions
}
