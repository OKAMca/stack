'use client'

import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import type {
  InfiniteData,
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
} from '@tanstack/react-query'
import type { Variables } from 'graphql-request'
import { getQueryValues, queryGql } from '../query'
import { graphqlRequestAdmin } from '../request'

export function useSuspenseInfiniteGqlQuery<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
  options: Omit<UseSuspenseInfiniteQueryOptions<InfiniteData<TResult>>, 'queryFn' | 'queryKey'> & {
    enabled?: boolean
    useErrorBoundary?: boolean
  },
): UseSuspenseInfiniteQueryResult<InfiniteData<TResult>> {
  const values = getQueryValues<TResult, TVariables>(document, variables)

  const result = useSuspenseInfiniteQuery({
    queryKey: values,
    queryFn: async ({ queryKey, pageParam }) => {
      return queryGql(document, { ...(queryKey[1] as TVariables), offset: pageParam }) as Promise<InfiniteData<TResult>>
    },
    ...options,
  })

  return result
}

export function useSuspenseInfiniteGqlQueryAdmin<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
  options: Omit<UseSuspenseInfiniteQueryOptions<InfiniteData<TResult>>, 'queryFn' | 'queryKey'> & {
    enabled?: boolean
    useErrorBoundary?: boolean
  },
): UseSuspenseInfiniteQueryResult<InfiniteData<TResult>> {
  const values = getQueryValues<TResult, TVariables>(document, variables)

  const result = useSuspenseInfiniteQuery({
    queryKey: values,
    queryFn: async ({ queryKey, pageParam }) => {
      return queryGql(document, { ...(queryKey[1] as TVariables), offset: pageParam }, graphqlRequestAdmin) as Promise<
        InfiniteData<TResult>
      >
    },
    ...options,
  })

  return result
}
