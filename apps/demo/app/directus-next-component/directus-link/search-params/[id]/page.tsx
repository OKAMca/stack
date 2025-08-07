import type { FragmentType } from '@demo/directus-data-query'
import {
  LinkByIdDocument,
  LinksFragmentDoc,
  PageSettingsFragmentDoc,
  SearchParamsFragmentDoc,
  useFragment as getFragment,
} from '@demo/directus-data-query'
import { DirectusLink, getDirectusSearchParams } from '@okam/directus-next-component'
import { queryGql } from '@okam/directus-query'
import { Box, Typography } from '@okam/stack-ui'

function getLinksFragment(linkFragment: FragmentType<typeof LinksFragmentDoc> | null | undefined) {
  const link = getFragment(LinksFragmentDoc, linkFragment)
  const collection = getFragment(PageSettingsFragmentDoc, link?.collection)
  const params = link?.params?.map((param) => getFragment(SearchParamsFragmentDoc, param))

  return {
    ...link,
    collection,
    params,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { links_by_id: linkFragment } = (await queryGql(LinkByIdDocument, { id: params.id, locale: 'en' })) ?? {}
  const link = getLinksFragment(linkFragment)
  const { params: linkParams } = link
  const searchParams = getDirectusSearchParams(linkParams)

  return (
    <Box customTheme="flex flex-col gap-4 mx-8">
      <Box>
        <Typography tokens={{ size: 'h2' }}>Search params</Typography>
        <Box customTheme="flex flex-col gap-2">
          {Array.from(searchParams.entries()).map(([name, value]) => (
            <Box key={name} customTheme="flex gap-2">
              <Typography tokens={{ size: 'paragraph', weight: 'bold' }}>{name}:</Typography>
              <Typography tokens={{ size: 'paragraph' }}>{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography tokens={{ size: 'h2', className: 'block' }}>Link data</Typography>
        <Typography tokens={{ size: 'paragraph', className: 'block bg-gray-100 p-4' }}>
          {JSON.stringify(link, null, 2)}
        </Typography>
      </Box>
      <Box>
        <Typography tokens={{ size: 'h2', className: 'block' }}>Rendered link</Typography>
        <DirectusLink {...link} />
      </Box>
    </Box>
  )
}
