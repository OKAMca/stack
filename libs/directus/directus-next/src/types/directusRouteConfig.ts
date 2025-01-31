export interface DirectusRouteRedirectsModule {
  /**
   * @default process.env.NEXT_API_REDIRECT_SECRET
   */
  getRedirectSecret?: () => string
  /**
   * @default process.env.NEXT_MIDDLEWARE_REDIRECT_URL ?? process.env.NEXT_SERVER_GRAPHQL_URL ?? 'http://localhost:3000'
   */
  getApiRouteUrl?: () => string
  /**
   * @default /api/redirects
   */
  apiRoute?: string
}

export interface DirectusRouteConfig {
  localeMap?: Record<string, string>
  collectionSettings: {
    [collection: string]: {
      idField: string
    }
  } & {
    default: {
      idField: string
    }
  }
  modules?: {
    redirects?: DirectusRouteRedirectsModule
  }
}
