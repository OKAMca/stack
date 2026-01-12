import type { Nullable } from '@okam/stack-ui'
import { isEmpty } from 'radashi'
import type { SearchParams } from '../../types/links'

export function getDirectusSearchParams(params: Nullable<Nullable<SearchParams>[]>): URLSearchParams {
  const searchParams = new URLSearchParams()

  params?.forEach((param) => {
    const { name, value } = param ?? {}
    if (isEmpty(name) || isEmpty(value)) {
      return
    }

    searchParams.set(name, value)
  })

  return searchParams
}

/**
 * @deprecated Use `getDirectusSearchParams` instead
 */
export const useDirectusSearchParams = getDirectusSearchParams
