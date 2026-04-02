import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Box } from '@okam/stack-ui'
import { useLocale } from 'react-aria'
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
  args: {
    href: '/products/2',
    children: 'Product 2',
    scroll: true,
    behavior: 'instant',
    onClick: e => console.log('Click', e),
    onNavigate: e => console.log('Navigate', e),
    onMouseEnter: e => console.log('Mouse enter', e),
    onTouchStart: e => console.log('Touch start', e),
    onSearchParamsChange: searchParams => console.log('Search params change', searchParams),
    onHashChange: hash => console.log('Hash change', hash),
    tokens: { buttonStyle: 'default' },
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
    onSearchParamsChange: {
      control: false,
      description: 'Callback function that is called when the search params change. Relies on `useSearchParams` hook.',
    },
    onNavigate: {
      control: false,
      table: {
        category: 'next/link',
      },
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
        'The active locale is automatically prepended to `href`. locale allows for providing a different locale. When `false` href has to include the locale as the default behavior is disabled. By default, the locale will try to be set via the `locale` prop, then the `useLocale` hook from react-aria, then the `useParams` hook with the `locale` dynamic route segment.',
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
    i18n: {
      control: false,
      table: {
        category: '',
      },
    },
  },
  render: ({ href, ...args }) => {
    console.log(useLocale())
    return (
      <Box customTheme="w-fit">
        <Link href={href} {...args} />
      </Box>
    )
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const ScrollDefault: Story = {
  decorators: [
    Story => (
      <>
        <Box customTheme="h-screen bg-gray-100 flex items-center justify-center mb-8">This is long content</Box>
        <Story />
      </>
    ),
  ],
}

export const ScrollFalse: Story = {
  decorators: ScrollDefault.decorators,
  args: {
    scroll: false,
  },
}

export const ScrollTop: Story = {
  decorators: ScrollDefault.decorators,
  args: {
    scroll: 'top',
  },
}

export const Internal: Story = {
  args: {
    href: '/products/2',
  },
}

export const External: Story = {
  args: {
    href: 'https://www.google.com',
  },
}

export const Locale: Story = {
  args: {
    href: '/products/2',
    locale: 'fr',
  },
}

export const ContextLocale: Story = {
  args: {
    href: '/products/2',
    locale: undefined,
  },
}

export const Anchor: Story = {
  args: {
    href: '#products-2',
    as: 'a',
  },
}

export const LocalePrefixAlways: Story = {
  args: {
    href: '/products/2',
    i18n: {
      defaultLocale: 'en',
      localePrefix: 'always',
    },
  },
}

export const LocalePrefixAsNeeded: Story = {
  args: {
    href: '/products/2',
    i18n: {
      defaultLocale: 'en',
      localePrefix: 'as-needed',
    },
  },
}
