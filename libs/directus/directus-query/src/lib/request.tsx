import { QueryCache, QueryClient } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'
import { logger } from '../logger'

const GRAPHQL_ENDPOINT_PUBLIC = process.env.NEXT_PUBLIC_GRAPHQL_URL as string
const GRAPHQL_ENDPOINT_SERVER = process.env.NEXT_SERVER_GRAPHQL_URL as string
const GRAPHQL_ENDPOINT_ADMIN = process.env.NEXT_GRAPHQL_URL_ADMIN as string
const AUTH_TOKEN = (process.env.NEXT_PUBLIC_API_TOKEN as string) ?? ''
const AUTH_TOKEN_ADMIN = process.env.NEXT_PUBLIC_API_TOKEN as string

// for debugging, display default client endpoint
export function grapqhlGetDefaultEndpoint() {
  return GRAPHQL_ENDPOINT_SERVER || GRAPHQL_ENDPOINT_PUBLIC || ''
}

// for debugging, display admin client endpoint
export function grapqhlGetDefaultAdminEndpoint() {
  return GRAPHQL_ENDPOINT_ADMIN
}

// on server side, try to use NEXT_SERVER_GRAPHQL_URL (not public) and fallback on NEXT_PUBLIC_GRAPHQL_URL
// on client side, use NEXT_PUBLIC_GRAPHQL_URL because NEXT_SERVER_GRAPHQL_URL should be undefined
export const graphqlRequestClient = new GraphQLClient(GRAPHQL_ENDPOINT_SERVER || GRAPHQL_ENDPOINT_PUBLIC, {
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
      logger.log('QueryClient Error', 'error', { error })
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
})

export default graphqlRequestClient
