import { tv } from 'tailwind-variants'

export const calendarContainer = tv({
  base: 'inline-block text-gray-800',
})

export const calendarHeaderContainer = tv({
  base: 'flex items-center justify-between pb-4',
})

export const calendarNavigationButtonsContainer = tv({
  base: 'flex items-center gap-1',
})

export const calendarNavigationButtons = tv({
  base: 'active:bg-color-1-500 p-2 rounded-full active:text-color-1-100 hover:bg-color-1-200',
})

export const calendarTable = tv({
  base: 'flex-1',
})

export const calendarDayLabel = tv({
  base: 'text-center',
})

export const calendarCellContainer = tv({
  base: 'py-0.5 relative',
  variants: {
    isFocusVisible: {
      true: 'z-10',
      false: '',
    },
  },
})

export const calendarCell = tv({
  base: 'w-10 h-10 outline-none group',
  variants: {
    isSelected: {
      true: '',
      false: '',
    },
    isInvalid: {
      true: '',
      fasle: '',
    },
    isDisabled: {
      true: 'disabled',
      false: '',
    },
    isRoundedLeft: {
      true: 'rounded-l-full',
      false: '',
    },
    isRoundedRight: {
      true: 'rounded-r-full',
      false: '',
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      isInvalid: true,
      class: 'bg-red-300',
    },
    {
      isSelected: true,
      isInvalid: false,
      class: 'bg-color-1-300',
    },
  ],
})

export const calendarCellFormattedDate = tv({
  base: 'w-full h-full rounded-full flex items-center justify-center cursor-pointer',
  variants: {
    isSelected: {
      true: '',
      false: '',
    },
    isInvalid: {
      true: '',
      fasle: '',
    },
    isDisabled: {
      true: '',
      false: '',
    },
    isFocusVisible: {
      true: 'ring-2 group-focus:z-2 ring-violet-600 ring-offset-2',
      false: '',
    },
    isSelectionStart: {
      true: '',
      false: '',
    },
    isSelectionEnd: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      isDisabled: true,
      isInvalid: false,
      class: 'text-gray-400',
    },
    {
      isSelectionStart: true,
      isSelectionEnd: false,
      isInvalid: true,
      class: 'bg-red-600 text-white hover:bg-red-700',
    },
    {
      isSelectionStart: true,
      isSelectionEnd: true,
      isInvalid: true,
      class: 'bg-red-600 text-white hover:bg-red-700',
    },
    {
      isSelectionStart: true,
      isSelectionEnd: false,
      isInvalid: false,
      class: 'bg-color-1-400 text-white hover:bg-color-1-500',
    },
    {
      isSelectionStart: true,
      isSelectionEnd: true,
      isInvalid: false,
      class: 'bg-color-1-400 rounded-full text-white hover:bg-color-1-500',
    },
    {
      isSelectionStart: false,
      isSelectionEnd: true,
      isInvalid: true,
      class: 'bg-red-600 text-white hover:bg-red-700',
    },
    {
      isSelectionStart: false,
      isSelectionEnd: true,
      isInvalid: false,
      class: 'bg-color-1-400 text-white hover:bg-color-1-500',
    },
    {
      isSelected: false,
      isDisabled: false,
      class: 'hover:bg-color-1-100',
    },
    {
      isSelected: true,
      isDisabled: false,
      isInvalid: false,
      isSelectionStart: false,
      isSelectionEnd: false,
      class: 'hover:bg-color-1-300',
    },
    {
      isSelected: true,
      isDisabled: false,
      isInvalid: true,
      isSelectionStart: false,
      isSelectionEnd: false,
      class: 'hover:bg-red-400',
    },
  ],
})
