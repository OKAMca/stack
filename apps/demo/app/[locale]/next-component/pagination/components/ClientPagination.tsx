'use client'

import type { BlockFaqsQuery } from '@demo/directus-data-query'
import { BlockFaqsDocument } from '@demo/directus-data-query'
import { useSuspenseInfiniteGqlQuery } from '@okam/directus-query'
import { Pagination, PaginationButton, PaginationContextProvider } from '@okam/next-component'
import { Box } from '@okam/stack-ui'
import { isEmpty } from 'radashi'

const limit = 2

const BlockFaqsPagination = () => {
  const result = useSuspenseInfiniteGqlQuery(
    BlockFaqsDocument,
    { limit },
    {
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const lastPageData = Object.values(lastPage)[0]
        if (!lastPageData || isEmpty(lastPageData) || lastPageData < limit) return null
        return limit * allPages.length
      },
    },
  )

  return (
    <PaginationContextProvider {...result} getItemKey={(item, index) => item.block_faqs[index].id}>
      <Pagination<BlockFaqsQuery, number>>
        {(item) => {
          return item.page.block_faqs?.map((block) => {
            return (
              <Box key={block.id} customTheme="bg-gray-100 p-4 mb-2">
                {JSON.stringify(block, null, 2)}
              </Box>
            )
          })
        }}
      </Pagination>
      <PaginationButton<BlockFaqsQuery, number>
        handlePageChange={({ fetchNextPage }) => {
          fetchNextPage()
        }}
      >
        Next page
      </PaginationButton>
    </PaginationContextProvider>
  )
}

export default BlockFaqsPagination
