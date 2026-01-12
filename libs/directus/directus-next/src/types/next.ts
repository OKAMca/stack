export interface MinimalNextUrl extends URL {
  clone: () => MinimalNextUrl
}

export interface MinimalNextRequest {
  nextUrl: MinimalNextUrl
}

export interface MinimalNextResponse {
  next: () => MinimalNextResponse
  notFound: () => MinimalNextResponse
  rewrite: (url: MinimalNextUrl | URL | string, options?: ResponseInit) => MinimalNextResponse
  redirect: (url: MinimalNextUrl | URL | string, options?: ResponseInit) => MinimalNextResponse
}
