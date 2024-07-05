import { BlockDispatcher, BlockSerializer } from '@okam/directus-block/server'
import { Box } from '@okam/stack-ui'

export default function Index() {
  return (
    <BlockDispatcher
      blocks={[
        {
          item: {
            id: '1',
            content: '<p>This is <strong>content</strong></p>',
            title: 'Title',
            level: 'h2',
          },
          collection: 'block_wysiwyg',
        },
        {
          item: {
            id: 'passing only item.id for querying works',
          },
          collection: 'block_wysiwyg',
        },
        {
          variables: {
            id: 'passing only variables works',
          },
          collection: 'block_wysiwyg',
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
