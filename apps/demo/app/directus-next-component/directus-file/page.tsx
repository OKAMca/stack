import { DirectusFile } from '@okam/directus-next-component'
import { queryGql } from '@okam/directus-query'
import { Box } from '@okam/stack-ui'
import { BlockFilesDocument, DirectusFilesFragmentDoc, useFragment } from 'apps/demo/directus-data-query/src'

export default async function Index() {
  const blockFiles = await queryGql(BlockFilesDocument, { id: 'ff9f0886-8ca0-43a1-8c14-9263f5072653' })

  const files = blockFiles?.block_files_by_id?.files?.map((file) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFragment(DirectusFilesFragmentDoc, file?.directus_files_id),
  )

  return <Box>{files?.map((file) => <DirectusFile key={file?.id} {...file} />)}</Box>
}
