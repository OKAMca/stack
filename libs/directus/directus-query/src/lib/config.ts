/* eslint-disable @typescript-eslint/naming-convention */

import type { RequestConfig } from 'node_modules/graphql-request/build/legacy/helpers/types'

export const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL as string
export const AUTH_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN as string

export const defaultConfig = {
  credentials: 'include',
  mode: 'cors',
  fetch,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
} as RequestConfig
