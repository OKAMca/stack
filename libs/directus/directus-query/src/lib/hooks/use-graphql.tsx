'use client'

import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useQuery } from '@tanstack/react-query'
import type { QueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { GraphQLClient, Variables } from 'graphql-request'
import { getQueryValues, queryGql } from '../query'

export function useGqlQuery<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  options?: QueryOptions & { enabled: boolean; useErrorBoundary: boolean },
  client?: GraphQLClient,
): UseQueryResult<TResult> {
  const values = getQueryValues<TResult, TVariables>(document, variables)

  return useQuery({
    queryKey: values,
    queryFn: async ({ queryKey }) => queryGql(document, queryKey[1] as TVariables, client),
    ...options,
  })
}

export default useGqlQuery
