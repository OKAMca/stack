import type { TToken } from '../../../providers/Theme/interface'
import type { TDefaultComponent } from '../../../types/components'

export type TErrorMessageProps<T = TToken> = TDefaultComponent<T> & {
  validationErrors?: string[]
}
