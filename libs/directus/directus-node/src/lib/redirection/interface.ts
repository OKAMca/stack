export interface TFetchRedirectsConfig {
  graphqlEndpoint: string | undefined
  graphqlApiKey: string | undefined
  redirectsFilename?: string
  rewritesFilename?: string
  limit: number | undefined
}

export interface TFetchRedirectsResponse {
  redirects: TRedirectData[]
  rewrites: TRedirectData[]
}

export interface TRedirectData {
  source: string
  destination: string
  permanent?: boolean
  locale?: boolean
}

export type TRedirectType = 'redirects' | 'rewrites'
