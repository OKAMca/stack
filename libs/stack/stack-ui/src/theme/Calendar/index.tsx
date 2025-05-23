import { tv } from 'tailwind-variants'

export const calendarContainer = tv({
  base: 'text-gray-800 flex flex-col gap-4',
})

export const calendarHeader = tv({
  base: 'flex items-center justify-between',
})

export const calendarTitle = tv({
  base: 'text-2xl text-color-1-500 font-bold',
})

export const calendarHeaderContainer = tv({
  base: '',
})

export const calendarHeaderRow = tv({
  base: '',
})

export const calendarBody = tv({
  base: '',
})

export const calendarWeekRow = tv({
  base: '',
})

export const calendarNavigationButtonsContainer = tv({
  base: 'flex items-center gap-1',
})

export const calendarNavigationButtons = tv({
  base: `
    active:bg-color-1-500
    p-2
    rounded-full
    active:text-color-1-100
    hover:bg-color-1-200
    focus-ring-black
    transition-all
    duration-300
    ease-in-out
  `,
})

export const calendarTable = tv({
  base: `
    border-spacing-2
    border-separate
  `,
})

export const calendarDayLabel = tv({
  base: `
    text-center
    capitalize
    rounded-lg
    p-2
    mx-2
    bg-color-1-300
  `,
})

export const calendarCellContainer = tv({
  base: 'text-center',
  variants: {
    isFocusVisible: {
      true: 'z-10',
      false: '',
    },
  },
})

export const calendarCell = tv({
  base: 'w-10 h-10',
  variants: {
    isSelected: {
      true: '',
      false: '',
    },
    isInvalid: {
      true: '',
      false: '',
    },
    isDisabled: {
      true: 'disabled pointer-events-none',
      false: '',
    },
    isUnavailable: {
      true: 'pointer-events-none',
      false: '',
    },
    isOutsideRange: {
      true: 'pointer-events-none',
      false: '',
    },
    isOutsideVisibleRange: {
      true: 'pointer-events-none',
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
      isSelected: [true, false],
      isInvalid: true,
      class: 'bg-error-400 hover:bg-error-500',
    },
    {
      isSelected: true,
    },
  ],
})

export const calendarCellDate = tv({
  base: `
    w-full
    h-full
    flex
    items-center
    justify-center
    cursor-pointer
    transition-all
    duration-100
    ease-in-out
    relative
  `,
  variants: {
    isSelected: {
      true: `
        bg-color-1-400
        text-white
        hover:bg-color-1-500
      `,
      false: `
        rounded-full
        hover:text-white
        hover:bg-color-1-400
      `,
    },
    isInvalid: {
      true: '',
      fasle: '',
    },
    isDisabled: {
      true: 'opacity-50',
      false: '',
    },
    isUnavailable: {
      true: 'text-gray-200',
      false: '',
    },
    isOutsideRange: {
      true: `
        text-black
        before:content-['/']
        before:text-gray-400
        before:[font-weight:100]
        before:text-4xl
        before:absolute
        before:inset-0
        before:flex
        before:items-center
        before:justify-center
      `,
      false: '',
    },
    isOutsideVisibleRange: {
      true: `text-gray-400`,
      false: '',
    },
    isFocusVisible: {
      true: '',
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
      isSelectionStart: [true, false],
      isSelectionEnd: [true, false],
      isDisabled: false,
      isOutsideRange: false,
      isUnavailable: false,
      isInvalid: true,
      class: `
        bg-error-400
        hover:bg-error-500
      `,
    },
    {
      isSelectionStart: true,
      class: `
        rounded-l-full
        bg-color-1-400
        text-white
        hover:bg-color-1-500
      `,
    },
    {
      isSelectionEnd: true,
      class: `
        rounded-r-full
        bg-color-1-400
        text-white
        hover:bg-color-1-500
      `,
    },
  ],
})

export const calendarTheme = {
  container: calendarContainer,
  header: calendarHeader,
  calendarHeaderContainer,
  title: calendarTitle,
  navigationButtonsContainer: calendarNavigationButtonsContainer,
  navigationButtons: calendarNavigationButtons,
  calendarTable,
  calendarDayLabel,
  cellContainer: calendarCellContainer,
  cell: calendarCell,
  cellDate: calendarCellDate,
}
