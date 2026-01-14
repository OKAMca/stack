import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

const filterTagGroupWrapper = tv({
  base: 'w-full flex flex-col gap-2',
})

const filterTagGroupTags = tv({
  base: 'flex flex-col gap-2 max-w-[150px] items-center mx-auto',
})

const filterTagGroupLabel = tv({
  extend: typography,
  defaultVariants: { size: 'h4' },
})

const filterTagGroupDescription = tv({
  extend: typography,
  base: 'block',
  defaultVariants: { size: 'footnotes' },
})

const filterTagGroupErrorMessage = tv({
  extend: typography,
  base: 'block',
  defaultVariants: { isError: true },
})

const filterTagGroupTagWrapper = tv({
  base: [
    button({ buttonStyle: 'outline' }),
    `
      focus-visible:outline
      focus-visible:outline-offset-2
      focus-visible:outline-2
      focus-visible:outline-black
    `,
  ],
  variants: {
    isSelected: {
      true: [button({ buttonStyle: 'default' })],
    },
    isDisabled: {
      true: 'pointer-events-none opacity-30',
    },
  },
})

const filterTagGroupTagContainer = tv({
  extend: typography,
  base: 'flex items-center justify-center',
})

const filterPopoverButton = tv({
  extend: button,
  base: '!min-w-[200px]',
})

const filterPopoverPopover = tv({
  base: 'w-[var(--filter-popover-container-width)] bg-gray-300 rounded-md p-4',
})

const filterTheme = {
  popover: {
    button: filterPopoverButton,
    popover: filterPopoverPopover,
  },
  tagGroup: {
    wrapper: filterTagGroupWrapper,
    tags: filterTagGroupTags,
    label: filterTagGroupLabel,
    description: filterTagGroupDescription,
    errorMessage: filterTagGroupErrorMessage,
    tag: {
      wrapper: filterTagGroupTagWrapper,
      container: filterTagGroupTagContainer,
    },
  },
}

export default filterTheme
