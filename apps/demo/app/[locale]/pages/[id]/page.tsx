import { usePageSettings } from '@okam/directus-next/server'
import { PageByIdDocument } from 'apps/directus-data-query/src'
import { directusConfig } from '../../../../middleware'

export default async function Page(props: { params: { id: string; locale: string } }) {
  const data = await usePageSettings({
    document: PageByIdDocument,
    variables: props.params,
    config: directusConfig,
  })

  // If the query has no main fragment, the type parameters must be passed.
  // const dataWithoutFragment = await usePageSettings<PageFragment, 'pages_by_id', typeof props.params>({
  //   document: PageByIdWithoutFragmentDocument,
  //   variables: props.params,
  //   config: directusConfig,
  // })
  // const { translations, page_settings } = dataWithoutFragment ?? {}

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
