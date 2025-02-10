import { tv } from 'tailwind-variants'
import button from '../Button'
import typography from '../Typography'

const tagGroupWrapper = tv({
  base: 'w-full flex flex-col gap-2',
})

const tagGroupTags = tv({
  base: 'flex flex-wrap gap-2',
})

const tagGroupLabel = tv({
  extend: typography,
  defaultVariants: { size: 'h4' },
})

const tagGroupDescription = tv({
  extend: typography,
  base: 'block',
  defaultVariants: { size: 'footnotes' },
})

const tagGroupErrorMessage = tv({
  extend: typography,
  base: 'block',
  defaultVariants: { isError: true },
})

const tagGroupTagWrapper = tv({
  base: [button({ buttonStyle: 'outline' })],
  variants: {
    isSelected: {
      true: [button({ buttonStyle: 'default' })],
    },
    isDisabled: {
      true: 'pointer-events-none opacity-30',
    },
  },
})

const tagGroupTagContainer = tv({
  extend: typography,
  base: 'flex items-center justify-center',
})

const tagGroupTheme = {
  wrapper: tagGroupWrapper,
  tags: tagGroupTags,
  label: tagGroupLabel,
  description: tagGroupDescription,
  errorMessage: tagGroupErrorMessage,
  tag: {
    wrapper: tagGroupTagWrapper,
    container: tagGroupTagContainer,
  },
}

export default tagGroupTheme
