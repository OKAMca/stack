import type { AriaLandmarkProps } from 'react-aria'
import type { TToken } from '../../providers/Theme/interface'
import type { TDefaultComponent } from '../../types/components'

export interface TSkipToMainProps<T = TToken> extends TDefaultComponent<T> {
  href?: string
  ariaLabel?: string
  children?: React.ReactNode
}

export interface TMainProps<T = TToken> extends TDefaultComponent<T>, AriaLandmarkProps {
  id?: string
  tabIndex?: number
  children?: React.ReactNode
}
