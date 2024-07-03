import { BlockDispatcher, BlockSerializer } from '@okam/directus-block'
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
            id: '1',
          },
          collection: 'block_wysiwyg',
        },
      ]}
    >
      {(block) => (
        <Box key={block?.item?.id}>
          <BlockSerializer {...block} />
        </Box>
      )}
    </BlockDispatcher>
  )
}
