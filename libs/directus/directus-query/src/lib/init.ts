import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Variables } from 'graphql-request'
import type { RequestConfig } from 'node_modules/graphql-request/build/legacy/helpers/types'
import { GraphQLClient } from 'graphql-request'
import { defaultConfig, GRAPHQL_ENDPOINT } from './config'
import { queryGql } from './query'

function initDirectusQuery(graphqlEndPoint = GRAPHQL_ENDPOINT, requestConfig: RequestConfig = defaultConfig) {
  const client = new GraphQLClient(graphqlEndPoint, requestConfig)

  async function internalQueryGql<TResult, TVariables extends Variables>(
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

export default initDirectusQuery
