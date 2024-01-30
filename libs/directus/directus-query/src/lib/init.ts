import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { GraphQLClient } from 'graphql-request'
import type { Variables } from 'graphql-request'
import type { RequestConfig } from 'graphql-request/build/esm/types'
import { GRAPHQL_ENDPOINT, defaultConfig } from './config'
import { queryGql } from './query'

const initDiretusQuery = (graphqlEndPoint = GRAPHQL_ENDPOINT, requestConfig: RequestConfig = defaultConfig) => {
  const client = new GraphQLClient(graphqlEndPoint, requestConfig)

  function internalQueryGql<TResult, TVariables extends Variables>(
    document: TypedDocumentNode<TResult, TVariables>,
    queryKey?: TVariables,
  ) {
    return queryGql(document, queryKey, client)
  }

  return {
    queryGql: internalQueryGql,
    client,
  }
}

export default initDiretusQuery
