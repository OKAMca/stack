import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { UseQueryResult } from '@tanstack/react-query'
import type { GraphQLClient, Variables } from 'graphql-request'
import type React from 'react'

export type TGQLQueryProviderProps = {
  children: React.ReactNode
  client: GraphQLClient
}

export type TGQLQueryContextProps = {
  useGqlQuery: <TResult, TVariables extends Variables>(
    document: TypedDocumentNode<TResult, TVariables>,
    queryKey?: TVariables,
  ) => UseQueryResult
}
