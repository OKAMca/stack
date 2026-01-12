// route handler enabling draft mode
// visiting /api/draft will set a cookie name __prerender_bypass
// Query Parameters
// @var {string} secret Shared secret between backend and frontend, see NEXT_API_DRAFT_SECRET
// @var {string[]} languages List of languages ['en-CA', 'fr-CA']
// @var {string[]} urls  List of urls ['/page', '/fr/page']
// @var {string} version Collection Item Version (if empty, graphql use the main version)
// @var {string[] routes List of route templated rules (not used), {variable} are fetched inside the query string
// @var {string} pk User graphql key (not used)

import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { template } from 'radashi'
import { getJsonErrorResponse } from '../response'
import { getDraftSecretDefault } from './env'

export function parseDraftParams(url: string) {
  const { searchParams } = new URL(url)
  const secret = searchParams.get('secret') || ''
  const languagesParam = searchParams.get('languages')
  const pathsParam = searchParams.get('urls')
  const routesParam = searchParams.get('routes')
  const pkParam = searchParams.get('pk')
  const versionParam = searchParams.get('version')

  const emptyReturn = {
    secret: '',
    languages: [],
    paths: [],
    routes: [],
    type: '',
    pk: '',
    version: '',
  }

  if (!secret || !languagesParam || !(pathsParam || routesParam)) {
    return emptyReturn
  }

  const pk = typeof pkParam === 'string' ? pkParam : ''
  const version = typeof versionParam === 'string' ? versionParam : ''

  try {
    const languages = JSON.parse(languagesParam)
    if (routesParam) {
      const routes = JSON.parse(routesParam)
      return {
        secret,
        languages,
        paths: [],
        routes,
        type: 'route',
        pk,
        version,
      }
    }

    if (!pathsParam) {
      return emptyReturn
    }
    const paths = JSON.parse(pathsParam)

    return {
      secret,
      languages,
      paths,
      routes: [],
      type: 'path',
      pk,
      version,
    }
  } catch (e) {
    return emptyReturn
  }
}

/**
 * Parse route to find argument, then check in url search part to find the value
 * Example {{slug}} will match slug=abc or slugs=["abc"] (if index = 0)
 * Every matches will be set as empty if not found
 * @param {string} routeUrl The Routes that can contains {{argument}}
 * @param {string} url The URL with the arguments into the search part (?arg=abc)
 * @param {number} index
 * @returns {string}
 */
export function getPathFromRoute(routeUrl: string, url: string, index = 0) {
  const { searchParams } = new URL(url)
  const matches = [...routeUrl.matchAll(/\{\{([a-z]+)\}\}/gi)]
  const map: Record<string, string> = {}
  matches.forEach((match) => {
    const key = match[1] || ''
    if (!key) {
      return
    }
    const listkey = `${key}s`
    const listParam = searchParams.get(listkey)
    if (listParam) {
      try {
        const list = JSON.parse(listParam)
        map[key] = list[index] || ''
      } catch (e) {
        map[key] = ''
      }
    } else {
      const param = searchParams.get(key)
      map[key] = param || ''
    }
  })

  return template(routeUrl, map)
}

export type HandleDraftOptions = {
  url: string
  getDirectusLanguage: () => string
  getDraftSecret?: (() => string) | undefined
  getJsonError?: (() => Response) | undefined
}

/**
 * Use handleDraft inside the default GET export of route.ts
 * You need to provide url and getDirectusLanguage
 * getDraftSecretDefault use environment variable NEXT_API_DRAFT_SECRET
 *
 * export async function GET(request: Request) {
 *   handleDraftRoute({
 *    url: request.url,
 *    getDirectusLanguage: () => 'en-CA' // default language to show
 *    getDraftSecret: () => 'secret'
 *   })
 * }
 */
export default async function handleDraftRoute({
  url,
  getDirectusLanguage,
  getDraftSecret,
  getJsonError,
}: HandleDraftOptions): Promise<Response | undefined> {
  const getSecretFunction = getDraftSecret || getDraftSecretDefault
  const getJsonErrorResponseFunction = getJsonError || getJsonErrorResponse
  const { secret, languages, paths, routes, type, version } = parseDraftParams(url)

  if (secret !== getSecretFunction()) {
    return getJsonErrorResponseFunction({ error: 'Invalid argument' }, 401)
  }

  if (type === '') {
    return getJsonErrorResponseFunction({ error: 'Invalid argument' }, 400)
  }

  if (!Array.isArray(languages) || languages.length <= 0) {
    return getJsonErrorResponseFunction({ error: 'Invalid languages argument' }, 400)
  }

  if (type === 'path' && (!Array.isArray(paths) || paths.length <= 0)) {
    return getJsonErrorResponseFunction({ error: 'Invalid paths argument' }, 400)
  }

  if (type === 'route' && (!Array.isArray(routes) || routes.length <= 0)) {
    return getJsonErrorResponseFunction({ error: 'Invalid routes argument' }, 400)
  }

  // we try to find the default language position in languages, to get the good urls to display
  // or we fallback on the first item
  const directusLang = getDirectusLanguage()
  const indexDefault = languages.indexOf(directusLang)
  const index = indexDefault !== -1 ? indexDefault : 0
  let redirectUrl = ''

  if (type === 'path') {
    const path = paths[index] || ''

    if (!path) {
      return getJsonErrorResponse({ error: 'Invalid path' }, 400)
    }

    redirectUrl = path
  } else if (type === 'route') {
    const route = routes[index] || ''

    if (!route) {
      return getJsonErrorResponse({ error: 'Invalid route' }, 400)
    }

    const pathFromRoute = getPathFromRoute(route, url, index)
    if (!pathFromRoute) {
      return getJsonErrorResponse({ error: 'Invalid route' }, 400)
    }
    redirectUrl = pathFromRoute
  }

  // appending version= to redirect
  if (redirectUrl && version) {
    const withParams = redirectUrl.indexOf('?') !== -1
    redirectUrl = `${redirectUrl}${withParams ? '&' : '?'}version=${encodeURIComponent(version)}`
  }

  // todo check if slug is valid
  ;(await draftMode()).enable()

  // doesn't work: using cookies() from next/headers because it's readonly
  // doesn't work if (pk) { res.cookies.set('__draftmode_pk', pk); }
  // redirect generate an error with a mutableCookies from the store, used by draftMode
  redirect(redirectUrl)
  return undefined
}
