import type { Options, ParserBuilder, UseQueryStatesKeysMap, Values } from 'nuqs'

export type TFiltersKeysMap<T> = UseQueryStatesKeysMap<Record<string, T>>

export type TFiltersItemsKeysMap<T, KeysMap = TFiltersKeysMap<T>> = {
  [Key in keyof KeysMap]: KeysMap[Key] & { items: Array<TFilterItem<T>> }
}

export interface TFilterItem<T> {
  id: string
  value: T
}

export interface TFilter<T> {
  id: string
  items: Array<TFilterItem<T>>
  defaultValue?: T
}

export type TFiltersContext<T> = {
  filters: TFiltersItemsKeysMap<T>
  values: Values<TFiltersItemsKeysMap<T>>
  setValues: (values: Values<TFiltersItemsKeysMap<T>>) => void
  selectedValues: Record<string, T>
}

export interface TFiltersProviderProps<T> {
  children: React.ReactNode
  filters: Array<TFilter<T>> | TFiltersItemsKeysMap<T>
  parse?: ParserBuilder<T>
  options?: Options
}
