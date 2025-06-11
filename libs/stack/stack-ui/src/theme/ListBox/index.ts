import { tv } from 'tailwind-variants'
import typography from '../Typography'

const listBoxWrapper = tv({
  base: 'flex flex-col gap-2',
})

const listBoxLabel = tv({
  extend: typography,
  defaultVariants: {
    size: 'h3',
  },
})

const listBoxList = tv({
  base: 'flex flex-col gap-2',
})

const listBoxSectionWrapper = tv({
  base: 'flex flex-col gap-2 pt-2 mb-2 border-t border-border first:border-t-0 first:pt-0 last:mb-0',
})

const listBoxSectionHeading = tv({
  extend: typography,
  defaultVariants: {
    size: 'h4',
  },
})

const listBoxOptionOption = tv({
  extend: typography,
  base: 'p-1 rounded-md',
  variants: {
    isSelectable: {
      true: 'cursor-pointer',
    },
    isLink: {
      true: 'cursor-pointer underline underline-offset-4 decoration-color-1-400 text-color-1-400 hover:text-color-1-500 active:text-color-1-600',
      false: '',
    },
    isFocused: {
      true: 'outline outline-2 outline-offset-1 outline-gray-400',
    },
    isFocusVisible: {
      true: 'outline outline-4 outline-offset-2 outline-black',
    },
    isSelected: {
      true: 'bg-color-1-400 text-white hover:bg-color-1-500 active:bg-color-1-600',
    },
    isDisabled: {
      true: 'opacity-50 pointer-events-none',
    },
    allowsSelection: {
      true: '',
    },
  },
  defaultVariants: {
    size: 'paragraph',
  },
  compoundVariants: [
    {
      isFocused: true,
      isFocusVisible: true,
      className: 'outline outline-4 outline-offset-2 outline-black',
    },
    {
      isSelectable: true,
      isLink: false,
      className: 'hover:bg-color-1-100 active:bg-color-1-200',
    },
  ],
})

const listBoxOptionLabel = tv({
  extend: typography,
  defaultVariants: {
    size: 'h5',
  },
})

const listBoxOptionDescription = tv({
  extend: typography,
  defaultVariants: {
    size: 'footnotes',
  },
})

const listBoxTheme = {
  wrapper: listBoxWrapper,
  label: listBoxLabel,
  list: listBoxList,
  section: {
    wrapper: listBoxSectionWrapper,
    heading: listBoxSectionHeading,
  },
  item: {
    option: listBoxOptionOption,
    label: listBoxOptionLabel,
    description: listBoxOptionDescription,
  },
}

export default listBoxTheme
