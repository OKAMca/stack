'use client'

import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { createCtx } from '@okam/core-lib'
import type { UseQueryOptions } from '@tanstack/react-query'
import type { Variables } from 'graphql-request'
import { useCallback, useMemo } from 'react'
import { useGqlQuery } from '../hooks'
import type { TGQLQueryContextProps, TGQLQueryProviderProps } from './interface'

const [useGql, GqlProvider] = createCtx<TGQLQueryContextProps>()

export { useGql }

export function GqlQueryContextProvider({ children, client }: Readonly<TGQLQueryProviderProps>) {
  const gqlFn = useCallback(
    function useInternalGqlQuery<TResult, TVariables extends Variables>(
      document: TypedDocumentNode<TResult, TVariables>,
      variables?: TVariables,
      options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>,
    ) {
      return useGqlQuery<TResult, TVariables>(document, variables, options, client)
    },
    [client],
  )

  const value = useMemo<TGQLQueryContextProps>(() => ({ useGqlQuery: gqlFn }), [gqlFn])

  return <GqlProvider value={value}>{children}</GqlProvider>
}
