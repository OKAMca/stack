'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Pagination from '.'

const query = `
  query Block_faqs($page: Int, $limit: Int = 2) {
    block_faqs(page: $page, limit: $limit) {
      alignment
      faqs
      headline
      id
      title
    }
  }
`

const graphqlEndpoint = process.env.NEXT_SERVER_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_URL
const graphqlApiKey = process.env.NEXT_PUBLIC_API_TOKEN

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function queryFn({ pageParam }: { pageParam: number }) {
  if (!graphqlEndpoint) {
    throw new Error('Missing GraphQL configuration `graphqlEndpoint`')
  }

  if (!graphqlApiKey) {
    throw new Error('Missing GraphQL configuration `graphqlApiKey`')
  }

  try {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer tN2CgO5Hj07VlimeDuJkkTdmVEQEoN6y`,
      },
      body: JSON.stringify({ query, variables: { page: pageParam } }),
    })
    return await response.json()
  } catch (error) {
    console.error(error)
    return {
      data: {
        block_faqs: [],
      },
    }
  }
}

const meta: Meta = {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient()
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      )
    },
  ],
  // render: (args) => {
  //   const { data, isLoading, isError } = useSuspenseInfiniteQuery({
  //     queryKey: ['block_faqs'],
  //     queryFn,
  //     getNextPageParam: (lastPage, pages) => {
  //       return 3
  //     },
  //     initialPageParam: 1,
  //   })
  //   return <div>Test</div>
  // },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
