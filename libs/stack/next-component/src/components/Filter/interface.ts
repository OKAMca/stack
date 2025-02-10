import type { TToken, TDefaultComponent } from '@okam/stack-ui'
import type { TFilter } from '../../hooks/useFilterState/interface'

export interface TFilterProps<T = TToken> extends Omit<TDefaultComponent<T>, 'children'>, TFilter {}
