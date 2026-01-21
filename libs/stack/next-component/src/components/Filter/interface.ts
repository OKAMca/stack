import type { TDefaultComponent, TPopoverButtonProps, TToken } from '@okam/stack-ui'
import type { TFilter } from '../../hooks/useFilterState/interface'

export interface TFilterTagGroupProps<T = TToken> extends Omit<TDefaultComponent<T>, 'children'>, TFilter {}

export interface TFilterPopoverButtonProps<T = TToken>
  extends
  Omit<TPopoverButtonProps<T>, 'type' | 'placement'>,
  Pick<Partial<TPopoverButtonProps<T>>, 'type' | 'placement'> {}

export interface TFilterProps<T = TToken>
  extends Omit<TFilterTagGroupProps<T>, 'label'>, Omit<TFilterPopoverButtonProps<T>, 'children' | 'id'> {}
