export interface HandleRedirectOptions {
  url: string
  /**
   * @default process.env.NEXT_API_REDIRECT_SECRET
   */
  getRedirectSecret?: () => string
  /**
   * @default process.env.NEXT_REDIRECT_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_URL
   */
  getDirectusGraphqlUrl?: () => string
  /**
   * @default process.env.NEXT_API_TOKEN_ADMIN
   */
  getDirectusApiToken?: () => string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getJsonError?: (data: any, status: number) => Response
  /**
   * @default 2000
   */
  limit?: number
  /**
   * Gets spread into the second argument of fetch.
   * Allows passing options like `cache` or `next.revalidate`
   */
  init?: Omit<RequestInit, 'body' | 'method' | 'headers'>
}
