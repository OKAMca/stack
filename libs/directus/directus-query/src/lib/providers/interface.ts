import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { GraphQLClient, Variables } from 'graphql-request'
import type { ReactNode } from 'react'

export interface TGQLQueryProviderProps {
  children: ReactNode
  client: GraphQLClient
}

export interface TGQLQueryContextProps {
  useGqlQuery: <TResult, TVariables extends Variables>(
    _document: TypedDocumentNode<TResult, TVariables>,
    _variables?: TVariables,
    _options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>,
  ) => UseQueryResult<TResult, Error>
}
