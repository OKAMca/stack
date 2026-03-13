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

export enum DirectusRouteLocalePrefix {
  /**
   * The pathname will be prefixed with the locale only when it is not the default locale
   *
   * @example
   * ```ts
   * const directusConfig = {
   *   defaultLocale: 'en-CA',
   *   localeMap: {
   *     'fr-CA': 'fr',
   *     'en-CA': 'en',
   *   }
   * }
   *
   * // navigate to /en/products/1
   * // output: /products/1 with english language
   *
   * // navigate to /products/1
   * // output: /products/1 with english language
   *
   * // navigate to /fr/produits/1
   * // output: /fr/produits/1 with french language
   * ```
   */
  AsNeeded = 'as-needed',
  /**
   * The pathname will always be prefixed by the locale
   *
   * @example
   * ```ts
   * const directusConfig = {
   *   defautLocale: 'en-CA',
   *   localeMap: {
   *     'fr-CA': 'fr',
   *     'en-CA': 'en',
   *   }
   * }
   *
   * // navigate to /en/products/1
   * // output: /en/products/1 with english language
   *
   * // navigate to /products/1
   * // output: /products/1 with english language
   *
   * // navigate to /fr/produits/1
   * // output: /fr/produits/1 with french language
   * ```
   */
  Always = 'always',
}

export type TDirectusRouteI18n<Locales extends string>
  = | {
    defaultLocale: Locales
    /**
     * {@link DirectusRouteLocalePrefix}
     */
    localePrefix: `${DirectusRouteLocalePrefix.AsNeeded}`
  }
  | {
    defaultLocale?: Locales
    /**
     * {@link DirectusRouteLocalePrefix}
     */
    localePrefix?: `${DirectusRouteLocalePrefix.Always}` | undefined
  }

export type TDirectusRouteConfig<Locales extends string = string> = {
  localeMap?: Record<Locales, string>
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
} & TDirectusRouteI18n<Locales>
