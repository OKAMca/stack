import type { DateFormatterOptions } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TDateProps<T = TToken> extends TDefaultComponent<T> {
  date: string
  dateFormatterOptions?: DateFormatterOptions
}
