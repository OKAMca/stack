'use client'

import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { GraphQLClient, Variables } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { getQueryValues, queryGql } from '../query'

export function useGqlQuery<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>,
  client?: GraphQLClient,
): UseQueryResult<TResult, Error> {
  const values = getQueryValues<TResult, TVariables>(document, variables)

  return useQuery<TResult, Error, TResult>({
    queryKey: values,
    queryFn: async ({ queryKey }) => queryGql(document, queryKey[1] as TVariables, client),
    ...options,
  })
}

export default useGqlQuery
