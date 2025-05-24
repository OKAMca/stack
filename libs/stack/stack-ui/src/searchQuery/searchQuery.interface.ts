/* eslint-disable @typescript-eslint/naming-convention */
import type { UseInfiniteQueryResult, UseQueryResult, InfiniteData } from 'react-query'

// eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
export enum SEARCH_POST_TYPE_FILTER {
  all = 'bellmedia_network,tv_network,ooh_network,tv_show,pressrelease,radio_network',
  allbrandshow = 'bellmedia_network,tv_network,ooh_network,tv_show,radio_network',
  show = 'tv_show',
  brand = 'radio_network,bellmedia_network,tv_network,ooh_network',
  news = 'pressrelease',
  radio = 'radio_network',
  tv = 'tv_network',
  bell = 'bellmedia_network',
  ooh = 'ooh_network',
  brAll = 'bellmedia_network,tv_network,ooh_network,radio_network',
  content = 'structuredcontent',
}

export type TSearchSortBy = (string | Record<string, unknown>)[]
export type TScVideoType = 'trailer' | 'screener' | null

/* eslint-disable no-shadow */
export interface IConfig {
  query?: string
  page?: number
  filter?: Record<string, unknown> | null
  fields?: string[]
  lang?: string
  sortBy?: TSearchSortBy
  perPage?: number
  perFirstPage?: number
  matchType?: string
  startDate?: string
  endDate?: string
  digital?: boolean
  postTypes?: string
  featured?: boolean
  useMultiMatch?: boolean
  showId?: string | null
  brandId?: string | null
  minScore?: number
  scContentType?: string | null
  scVideoType?: TScVideoType | string | null
  scContentAvailabilityDate?: boolean
  excludesIds?: number[]
}

export interface IStructuredContentsResultsSource {
  graphqlid: number
  parentTitle: string
  parentTheLedeUri: string
  scContentType: string
  scAccessLevel: string
  scAssociatedBrands: number[]
  scAssociatedBrandsData: string

  // VIDEO
  scVideoExternalLink: string
  scVideoId: number
  scVideoImage: string
  scVideoImageData: string
  scVideoSubtitle: string
  scVideoTitle: string
  scVideoType: string
}

export interface IResults {
  hits: {
    total: { value: number }
    hits: [
      {
        _source: {
          post_id: number
          ID: number
          post_date: string
          permalink: string
          image: string
          post_title: string
          post_type: string
          pr: boolean
          sales: boolean
          salesdigital: boolean
          network: string[]
          theledeuri: string
          firstbrand_logo_color_uri: string
          firstbrand_logo_white_uri: string
          color: string
          logo: string
          logocoloruri: string
          latest_assets_date: string
          keyarturi: string
          firstbrand_color: string
        } & IStructuredContentsResultsSource
      },
    ]
  }
}

export type TInitialData = InfiniteData<IResults> | null

export interface TSearchQueryInitialDataProps {
  initialData?: TInitialData
}

export interface TDefaultSearchQueryProps extends IConfig {
  enabled?: boolean | null
  keepPreviousData?: boolean
  shouldSearch?: boolean
  initialData?: TInitialData
}

export interface GetNextPageParamResultProps {
  currentPage?: number
  itemsCount?: number
  perPage?: number
  perFirstPage?: number
}

export interface TSearchResultsProps {
  queryContent: UseInfiniteQueryResult<IResults, Error>
  linkNewsPage?: string
}

export interface TPaginatedSearchResultsProps {
  queryContent: UseQueryResult<IResults, Error>
}

export interface TResultsProps {
  linkNewsPage?: string
  data?: IResults
  page?: number
  language?: string
}

export interface TLoadMoreSearchProps {
  linkNewsPage?: string
  debounceEvent?: (value: string) => void
}
