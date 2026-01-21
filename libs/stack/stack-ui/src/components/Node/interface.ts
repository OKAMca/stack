import type { ItemProps, SectionProps } from 'react-stately'

export type TNodeProps<T>
  = | Omit<ItemProps<T>, 'children'>
    | (Omit<SectionProps<T>, 'children'> & {
      children: ItemProps<T>['children'] | SectionProps<T>['children']
    })
