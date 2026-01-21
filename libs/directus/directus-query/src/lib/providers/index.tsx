'use client'

import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { GraphQLClient, Variables } from 'graphql-request'
import type { TGQLQueryContextProps, TGQLQueryProviderProps } from './interface'
import { createCtx } from '@okam/core-lib'
import { useMemo, useRef } from 'react'
import { useGqlQuery } from '../hooks'

const [useGql, GqlProvider] = createCtx<TGQLQueryContextProps>()

export { useGql }

// Generic function type for the context
type UseGqlQueryFn = <TResult, TVariables extends Variables>(
  _document: TypedDocumentNode<TResult, TVariables>,
  _variables?: TVariables,
  _options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>,
) => UseQueryResult<TResult, Error>

export function GqlQueryContextProvider({ children, client }: Readonly<TGQLQueryProviderProps>) {
  // Use ref to store client and avoid recreating the function
  const clientRef = useRef<GraphQLClient>(client)
  clientRef.current = client

  // Create a stable generic function that captures client via ref
  const gqlFn = useMemo<UseGqlQueryFn>(() => {
    return function useGqlQueryWithClient<TResult, TVariables extends Variables>(
      document: TypedDocumentNode<TResult, TVariables>,
      variables?: TVariables,
      options?: Omit<UseQueryOptions<TResult, Error, TResult>, 'queryKey' | 'queryFn'>,
    ): UseQueryResult<TResult, Error> {
      // Note: useGqlQuery is a hook that will be called when useGqlQueryWithClient is invoked
      // within a React component. This is a factory pattern that returns hook results.
      return useGqlQuery<TResult, TVariables>(document, variables, options, clientRef.current)
    }
  }, [])

  const value = useMemo<TGQLQueryContextProps>(() => ({ useGqlQuery: gqlFn }), [gqlFn])

  return <GqlProvider value={value}>{children}</GqlProvider>
}
