import type { Nullable } from '@okam/stack-ui'
import type { TSearchParams } from '../../types/links'
import { isEmpty } from 'radashi'

export function getDirectusSearchParams(params: Nullable<Nullable<TSearchParams>[]>): URLSearchParams {
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
