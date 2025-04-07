import { Box } from '@okam/stack-ui'
import type { Meta, StoryObj } from '@storybook/react'
import Link from './index'

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  parameters: {
    docs: {
      decorators: false,
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/[locale]/products/[id]',
        asPath: '/fr/products/1',
        query: {
          id: '1',
          locale: 'fr',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Box customTheme="h-screen bg-gray-100 flex items-center justify-center mb-8">This is long content</Box>
        <Story />
      </>
    ),
  ],
  args: {
    locale: 'en',
    href: '/products/2',
    children: 'Product 2',
    scroll: true,
    behavior: 'instant',
    onClick: (e) => console.log('Click', e),
    onMouseEnter: (e) => console.log('Mouse enter', e),
    onTouchStart: (e) => console.log('Touch start', e),
    onPathnameChange: (pathname) => console.log('Pathname change', pathname),
    onSearchParamsChange: (searchParams) => console.log('Search params change', searchParams),
    onHashChange: (hash) => console.log('Hash change', hash),
  },
  argTypes: {
    scroll: {
      description: 'Defines the scrolling action on link click.',
      control: { type: 'radio' },
      options: [true, false, 'top'],
      table: {
        type: {
          summary: 'boolean | "top"',
          detail: `
- \`true\` attempts to preserve previously set scrolling position.
- \`false\` will not scroll.
- \`"top"\` will scroll to the top of the page (behavior depending on \`behavior\` prop)
          `,
        },
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onPathnameChange: {
      control: false,
      description: 'Callback function that is called when the pathname changes. Relies on `usePathname` hook.',
    },
    onSearchParamsChange: {
      control: false,
      description: 'Callback function that is called when the search params change. Relies on `useSearchParams` hook.',
    },
    onHashChange: {
      control: false,
      description: 'Callback function that is called when the hash changes. Relies on `useHash` hook.',
    },
    href: {
      table: {
        category: 'next/link',
        type: { summary: 'string | URL' },
      },
    },
    prefetch: {
      table: {
        category: 'next/link',
      },
    },
    replace: {
      table: {
        category: 'next/link',
      },
    },
    shallow: {
      table: {
        category: 'next/link',
      },
    },
    passHref: {
      table: {
        category: 'next/link',
      },
    },
    legacyBehavior: {
      table: {
        category: 'next/link',
      },
    },
    locale: {
      description:
        'The active locale is automatically prepended. locale allows for providing a different locale. When `false` href has to include the locale as the default behavior is disabled. By default, the locale will try to be set via the `locale` prop, then the `useParams` hook. with the `locale` dynamic route segment.',
      table: {
        category: 'next/link',
      },
    },
    urlDecorator: {
      control: false,
      name: 'as (urlDecorator)',
      description:
        'Originally named `as` in next/link, prop was renamed to avoid conflicts with the `as` prop of `TDefaultComponent`.',
      table: {
        category: 'next/link',
        type: { summary: 'string | URL' },
      },
    },
    onClick: {
      control: false,
      table: {
        category: 'next/link',
      },
    },
    onMouseEnter: {
      control: false,
      table: {
        category: 'next/link',
      },
    },
    onTouchStart: {
      control: false,
      table: {
        category: 'next/link',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const ScrollDefault: Story = {}

export const ScrollFalse: Story = {
  args: {
    scroll: false,
  },
}

export const ScrollTop: Story = {
  args: {
    scroll: 'top',
  },
}
