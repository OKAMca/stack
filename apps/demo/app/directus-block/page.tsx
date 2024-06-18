import { BlockDispatcher, BlockSerializer } from '@okam/directus-block'
import { Box } from '@okam/stack-ui'

export default function Index() {
  return (
    <BlockDispatcher
      blocks={[{ item: { id: '1', content: 'Content', title: 'Title', settings: {} }, collection: 'block_wysiwyg' }]}
    >
      {(block) => (
        <Box key={block?.item?.id}>
          <BlockSerializer {...block} />
        </Box>
      )}
    </BlockDispatcher>
  )
}
