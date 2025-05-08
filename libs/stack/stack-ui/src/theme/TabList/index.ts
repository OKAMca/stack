import { tv } from 'tailwind-variants'
import typography from '../Typography'

const tabListWrapper = tv({
  base: `
    flex
    flex-col
    gap-4
  `,
})

const tabListContainer = tv({
  base: `
    flex
    gap-4
  `,
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row',
    },
  },
})

const tabListList = tv({
  base: `
    flex
    flex-wrap
    gap-4
  `,
  variants: {
    orientation: {
      horizontal: 'flex-row items-center',
      vertical: 'flex-col items-end',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

const tabListLabel = tv({
  extend: typography,
  defaultVariants: {
    size: 'h3',
  },
})

const tabListTabPanelTransition = tv({
  base: `
    focus-ring-black
    transition-all
    duration-200
  `,
})

const tabListTabPanelContainer = tv({
  base: `
    mt-4
    p-4
    bg-color-1-100
    rounded-md
    focus-ring-black
    transition-all
    duration-200
  `,
})

const tabListTabContainer = tv({
  base: `
  focus-ring-black
    transition-all
    duration-200
    px-4
    py-2
  `,
  variants: {
    orientation: {
      horizontal: 'border-b border-b-4',
      vertical: 'border-r border-r-4',
    },
    isSelected: {
      true: `
        border-color-1-500
        hover:border-color-1-900
        active:border-color-1-900
      `,
      false: `
        border-color-1-200
        hover:border-color-1-400
        active:border-color-1-400
      `,
    },
    isDisabled: {
      true: `
        opacity-30
        pointer-events-none
      `,
    },
    isFocusVisible: {
      true: `has-focus-ring`,
    },
  },
})

const tabListTabButton = tv({
  extend: typography,
  defaultVariants: {
    size: 'h6',
  },
})

const tabListTheme = {
  wrapper: tabListWrapper,
  container: tabListContainer,
  list: tabListList,
  label: tabListLabel,
  panel: {
    transition: tabListTabPanelTransition,
    container: tabListTabPanelContainer,
  },
  tab: {
    container: tabListTabContainer,
    button: tabListTabButton,
  },
}

export default tabListTheme
