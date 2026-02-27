export interface TDirectusRouteRedirectsModule {
  /**
   * @default process.env.NEXT_API_REDIRECT_SECRET
   */
  getRedirectSecret?: () => string
  /**
   * @default process.env.NEXT_MIDDLEWARE_REDIRECT_URL ?? `https://${process.env.VERCEL_URL}` ?? 'http://localhost:3000'
   */
  getApiRouteUrl?: () => string
  /**
   * @default /api/redirects
   */
  apiRoute?: string
}

export interface TDirectusRouteOptions {
  /**
   * If set to true, a path starting with the default locale will have no locale at all.
   * It is then inferred that when no locale is passed in the URL, the default locale will be used
   * @default true
   */
  excludeDefaultLocaleFromPathname?: boolean
}

export interface TDirectusRouteConfig {
  localeMap?: Record<string, string>
  defaultLocale?: string
  options?: TDirectusRouteOptions
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
    redirects?: TDirectusRouteRedirectsModule
  }
}
