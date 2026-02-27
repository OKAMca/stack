import type { TBlockSerializerConfigComponent } from '@okam/directus-block'
import type { BlockFilesFragment } from 'apps/directus-data-query/src'
import { blockWysiwygConfig, getFragment } from '@okam/directus-block'
import { BlockDispatcher, getBlock } from '@okam/directus-block/server'
import { DirectusFile } from '@okam/directus-next-component'
import { getPageSettings } from '@okam/directus-next/server'
import { Accordion, AccordionItem, Box } from '@okam/stack-ui'
import { BlockFilesByIdDocument, DirectusFilesFragmentDoc, PageByIdDocument } from 'apps/directus-data-query/src'
import { isEmpty } from 'radashi'
import { directusConfig } from '../../../../proxy'

const blockFilesConfig: TBlockSerializerConfigComponent<BlockFilesFragment> = {
  block_files: {
    document: BlockFilesByIdDocument,
    default: async (props) => {
      const { file: fileFragment } = await getBlock(props, 'block_files_by_id')
      const file = getFragment(DirectusFilesFragmentDoc, fileFragment)

      if (isEmpty(file))
        return null

      return (
        <Box customTheme="mb-8">
          <DirectusFile {...file} />
        </Box>
      )
    },
  },
}

export default async function Page(props: { params: Promise<{ id: string, locale: string }> }) {
  const params = await props.params
  const data = await getPageSettings({
    document: PageByIdDocument,
    variables: params,
    config: directusConfig,
  })

  const { blocks } = data?.translations?.[0] ?? {}

  // If the query has no main fragment, the type parameters must be passed.
  // const dataWithoutFragment = await getPageSettings<PageFragment, 'pages_by_id', typeof props.params>({
  //   document: PageByIdWithoutFragmentDocument,
  //   variables: props.params,
  //   config: directusConfig,
  // })
  // const { translations, page_settings } = dataWithoutFragment ?? {}

  return (
    <div>
      <Accordion id="page-data" customTheme="mb-8">
        <AccordionItem title="JSON Page Data">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </AccordionItem>
      </Accordion>
      {!isEmpty(blocks) && (
        <BlockDispatcher
          blocks={blocks}
          config={{
            components: {
              ...blockWysiwygConfig,
              ...blockFilesConfig,
            },
          }}
        />
      )}
    </div>
  )
}
