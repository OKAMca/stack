import type { Nullable } from '@okam/stack-ui'
import { isEmpty } from 'radashi'
import type { SearchParams } from '../types/links'

export function directusSearchParams(params: Nullable<Nullable<SearchParams>[]>): URLSearchParams {
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
