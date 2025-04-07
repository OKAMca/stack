import type { TDefaultComponent, TToken } from '@okam/stack-ui'
import type { TLink } from '../../hooks/useLink/interface'

export interface TLinkProps<T = TToken> extends Omit<TDefaultComponent<T>, keyof TLink>, TLink {}
