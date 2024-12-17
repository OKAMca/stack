'use client'

import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useSuspenseQuery } from '@tanstack/react-query'
import type { QueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import type { Variables } from 'graphql-request'
import { getQueryValues, queryGql } from '../query'
import { graphqlRequestAdmin } from '../request'

export function useSuspenseGqlQuery<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  options?: Omit<QueryOptions, 'queryFn'> & { enabled: boolean; useErrorBoundary: boolean },
): UseSuspenseQueryResult<TResult> {
  const values = getQueryValues<TResult, TVariables>(document, variables)

  return useSuspenseQuery({
    queryKey: values,
    queryFn: async ({ queryKey }) => queryGql(document, queryKey[1] as TVariables),
    ...options,
  })
}

export function useSuspenseGqlQueryAdmin<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  options?: Omit<QueryOptions, 'queryFn'>,
): UseSuspenseQueryResult<TResult> {
  const values = getQueryValues<TResult, TVariables>(document, variables)
  return useSuspenseQuery({
    queryKey: values,
    queryFn: async ({ queryKey }) => queryGql(document, queryKey[1] as TVariables, graphqlRequestAdmin),
    ...options,
  })
}
