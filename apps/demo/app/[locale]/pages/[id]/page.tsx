import { usePageSettings } from '@okam/directus-next/server'
import { PageByIdDocument } from 'apps/directus-data-query/src'
import { directusConfig } from '../../../../middleware'

export default async function Page(props: { params: { id: string; locale: string } }) {
  const data = await usePageSettings(
    {
      document: PageByIdDocument,
      variables: props.params,
    },
    directusConfig,
  )

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
