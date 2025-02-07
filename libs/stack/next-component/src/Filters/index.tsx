import { createCtx } from '@okam/core-lib'
import type { Options, ParserBuilder, Values } from 'nuqs'
import { parseAsString, useQueryStates } from 'nuqs'
import { isEmpty, objectify, shake } from 'radashi'
import type { ProviderProps } from 'react'
import { useMemo } from 'react'
import type { TFiltersContext, TFiltersItemsKeysMap, TFiltersKeysMap, TFiltersProviderProps } from './interface'

// eslint-disable-next-line @typescript-eslint/naming-convention
const [_useFilters, _FiltersProvider] = createCtx<TFiltersContext<unknown>>()

export function useFilters<T>() {
  return _useFilters() as unknown as () => TFiltersContext<T>
}

function FiltersProvider<T>(props: ProviderProps<TFiltersContext<T>>) {
  // eslint-disable-next-line react/jsx-pascal-case
  return <_FiltersProvider {...(props as ProviderProps<TFiltersContext<unknown>>)} />
}

function filtersToKeyMap<T>(
  filters: TFiltersProviderProps<T>['filters'],
  parse: ParserBuilder<T>,
  options: Options,
): TFiltersItemsKeysMap<T> {
  if (!Array.isArray(filters)) {
    return filters
  }

  return objectify(
    filters,
    (filter) => filter.id,
    (filter) => {
      const { defaultValue, items } = filter
      const value = defaultValue ? parse.withDefault(defaultValue).withOptions(options) : parse

      return { ...value, items }
    },
  )
}

function getSelectedValues<T>(values: Values<TFiltersKeysMap<T>>) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return shake(values, (value) => !isEmpty(value)) as Record<string, Exclude<T, null | {}>>
}

export function FiltersContextProvider<T = string>(props: TFiltersProviderProps<T>) {
  const { filters, children, parse = parseAsString, options = {} } = props

  const keyMap = filtersToKeyMap<T>(filters, parse as ParserBuilder<T>, options)

  const [values, setValues] = useQueryStates(keyMap)

  const selectedValues = getSelectedValues(values)

  const value = useMemo<TFiltersContext<T>>(
    () => ({ values, setValues, filters: keyMap, selectedValues, clearAll: () => setValues(null) }),
    [values, setValues, keyMap, selectedValues],
  )

  return <FiltersProvider value={value}>{children}</FiltersProvider>
}
