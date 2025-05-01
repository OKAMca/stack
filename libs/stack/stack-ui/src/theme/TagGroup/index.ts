import { tv } from 'tailwind-variants'
import typography from '../Typography'

const tagGroupWrapper = tv({
  base: `
    flex
    flex-col
    gap-4
  `,
})

const tagGroupTags = tv({
  base: `
    w-full
    flex
    flex-wrap
    gap-2
  `,
})

const tagGroupLabel = tv({
  extend: typography,
  defaultVariants: {
    size: 'h4',
  },
})

const tagGroupDescription = tv({
  extend: typography,
  defaultVariants: {
    size: 'paragraph',
  },
})

const tagGroupErrorMessage = tv({
  extend: typography,
  defaultVariants: {
    size: 'paragraph',
    isError: true,
  },
})

const tagGroupTagWrapper = tv({
  base: `
    focus-visible:outline
    focus-visible:outline-offset-2
    focus-visible:outline-2
    focus-visible:outline-black
    cursor-pointer
    transition-all
    duration-200
  `,
  variants: {
    isSelected: {
      true: `bg-color-1-800 text-white`,
    },
    isDisabled: {
      true: `opacity-50 pointer-events-none`,
    },
    isLink: {
      true: `
        border-b
        border-color-1-300
        px-2
        py-0.5
        mx-2
        text-color-1-500
        hover:text-color-1-700
        hover:border-color-1-700
        active:text-color-1-900
        active:border-color-1-900
      `,
      false: `
        p-2
        bg-color-1-200
        rounded-full
        hover:bg-color-1-300
        active:bg-color-1-400
        active:text-white
      `,
    },
  },
  defaultVariants: {
    isLink: false,
  },
})

const tagGroupTagContainer = tv({
  base: `
    flex
    items-center
    gap-2
  `,
})

const tagGroupTagRemoveButton = tv({
  base: `
    aspect-square
    rounded-full
    bg-black/30
    p-1
    h-auto
    w-8
  `,
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
    removeButton: tagGroupTagRemoveButton,
  },
}

export default tagGroupTheme
