import { initDiretusQuery } from '@okam/directus-query'

const queryClient = initDiretusQuery(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
  credentials: 'include',
  mode: 'cors',
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
})

export default queryClient
