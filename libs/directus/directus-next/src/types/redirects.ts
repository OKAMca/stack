export interface DirectusRedirect {
  source: string
  destination: string
  permanent: boolean
  locale: boolean
  status: 'published' | 'draft' | 'archived'
}
