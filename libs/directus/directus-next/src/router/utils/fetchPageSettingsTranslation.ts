import type { TPageSettingsTranslation } from '../../types'
import { log } from '../../logger'

const query = `
  query Languages_code($filter: page_settings_translations_filter) {
    page_settings_translations(filter: $filter) {
      languages_code {
        code
      }
      id
      page_settings_id {
        belongs_to_collection
        belongs_to_key
      }
      title
      slug
      path
    }
  }
`

export async function fetchPageSettingsTranslation(path: string): Promise<TPageSettingsTranslation[] | null> {
  // eslint-disable-next-line ts/prefer-nullish-coalescing, ts/strict-boolean-expressions -- empty string env var should fallback to next option
  const graphqlEndpoint = process.env.NEXT_SERVER_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_URL
  const graphqlApiKey = process.env.NEXT_PUBLIC_API_TOKEN

  if (graphqlEndpoint == null || graphqlEndpoint === '') {
    throw new Error('Missing GraphQL configuration `graphqlEndpoint`')
  }

  if (graphqlApiKey == null || graphqlApiKey === '') {
    throw new Error('Missing GraphQL configuration `graphqlApiKey`')
  }

  const variables = {
    filter: {
      path: { _eq: path },
      _and: [{ page_settings_id: { belongs_to_key: { _nempty: true } } }],
    },
  }

  try {
    log('Executing GraphQL query:', query)
    log('Query variables:', variables)

    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${graphqlApiKey}`,
      },
      body: JSON.stringify({ query, variables }),
    })

    const json = await response.json() as { data?: { page_settings_translations?: TPageSettingsTranslation[] } }
    log('GraphQL response:', json.data)
    return json.data?.page_settings_translations ?? null
  }
  catch (error) {
    log('GraphQL Error:', error)
    return null
  }
}
