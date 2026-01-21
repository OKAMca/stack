import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Variables } from 'graphql-request'
import { get } from 'radashi'
import graphqlRequestClient from './request'

export async function queryGql<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  queryKey?: TVariables,
  client = graphqlRequestClient,
) {
  return client.request<TResult>(document, {
    ...queryKey,
  })
}

export function getQueryValues<TResult, TVariables extends Variables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
) {
  const value = get<string>(document, 'definitions.0.name.value')
  return [value, variables] as const
}
