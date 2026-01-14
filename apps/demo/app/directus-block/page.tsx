import { blockWysiwygConfig } from '@okam/directus-block'
import { BlockDispatcher, BlockSerializer } from '@okam/directus-block/server'
import { Box } from '@okam/stack-ui'
import { BlockWysiwygsDocument } from 'apps/directus-data-query/src'

export default function Index() {
  return (
    <BlockDispatcher
      config={{
        components: {
          block_wysiwygs: { document: BlockWysiwygsDocument, ...blockWysiwygConfig.block_wysiwygs },
        },
      }}
      blocks={[
        {
          item: {
            id: '1',
            content: '<p>This is <strong>content</strong></p>',
            title: 'Title',
            level: 'h2',
          },
          collection: 'block_wysiwygs',
        },
        {
          item: {
            id: '4192cbb8-dbf8-4947-addb-469c0fac4f25',
          },
          collection: 'block_wysiwygs',
        },
        {
          variables: {
            id: 'b03789bb-2c0d-4160-be6a-ac49f67f7c61',
          },
          collection: 'block_wysiwygs',
        },
      ]}
    >
      {(block) => (
        <Box key={block.item?.id}>
          <BlockSerializer {...block} />
        </Box>
      )}
    </BlockDispatcher>
  )
}
