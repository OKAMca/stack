import { initDiretusQuery } from '@okam/directus/directus-query'

const queryClient = initDiretusQuery('https://example.com/api', {
  credentials: 'include',
  mode: 'cors',
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
})

export default queryClient
