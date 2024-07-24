/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { QueryCache, QueryClient } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL as string
const GRAPHQL_ENDPOINT_ADMIN = process.env.NEXT_GRAPHQL_URL_ADMIN as string
const AUTH_TOKEN = (process.env.NEXT_PUBLIC_API_TOKEN as string) ?? ''
const AUTH_TOKEN_ADMIN = process.env.NEXT_PUBLIC_API_TOKEN as string

export const graphqlRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  credentials: 'include',
  mode: 'cors',
  fetch,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
})

export const graphqlRequestAdmin = new GraphQLClient(GRAPHQL_ENDPOINT_ADMIN, {
  credentials: 'include',
  mode: 'cors',
  fetch,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN_ADMIN}`,
  },
})

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error(error)
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
})

export default graphqlRequestClient
