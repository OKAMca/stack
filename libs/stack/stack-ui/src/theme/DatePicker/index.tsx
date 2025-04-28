import { tv } from 'tailwind-variants'

const focusable = tv({
  base: `
    focus-ring-black
    transition-all
    duration-200
  `,
})

export const datePickerContainer = tv({
  base: 'relative inline-flex flex-col text-left',
})

export const datePickerButton = tv({
  extend: focusable,
  base: 'flex gap-4 justify-between items-center border-2 border-color-1-500 rounded-md bg-gray-100 p-4',
  variants: {
    dateFieldShown: {
      true: 'w-full',
      false: 'w-fit',
    },
    isInvalid: {
      true: 'bg-red-100 border-red-500',
      false: 'bg-gray-100 border-color-1-500',
    },
  },
  defaultVariants: {
    dateFieldShown: true,
  },
})

export const datePickerIcon = tv({
  base: 'text-white bg-color-1-500 rounded-md h-full p-2',
})

export const datePickerLabel = tv({
  base: 'text-color-1-500 font-bold pb-2 text-2xl',
})

export const datePickerWrapper = tv({
  base: 'w-fit flex flex-col gap-4',
})

export const datePickerCalendarPopoverUnderlay = tv({
  base: 'fixed inset-0',
})

export const datePickerCalendarPopoverContainer = tv({
  base: 'absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-8 z-10',
})

export const datePickerDialog = tv({
  base: 'flex flex-col gap-4',
})

export const datePickerDateFieldContainer = tv({
  base: 'flex gap-2 items-center justify-between',
  defaultVariants: {
    dateFieldShown: true,
  },
  variants: {
    dateFieldShown: {
      true: '',
      false: 'hidden',
    },
  },
})

export const datePickerDateField = tv({
  base: 'flex bg-gray-300 p-2 rounded-md',
})

export const datePickerDateSegment = tv({
  extend: focusable,
  base: `rounded-sm p-1 focus:bg-color-1-400 focus:text-white`,
})

export const datePickerInvalidIndicator = tv({
  base: 'rounded-lg p-2 border-2 border-red-500',
  variants: {
    position: {
      inner: 'text-red-500 bg-white',
      outer: 'text-black bg-red-100',
    },
  },
})

export const datePickerTheme = {
  container: datePickerContainer,
  wrapper: datePickerWrapper,
  button: datePickerButton,
  icon: datePickerIcon,
  dateField: datePickerDateField,
  dateSegment: datePickerDateSegment,
  label: datePickerLabel,
  calendarPopover: datePickerCalendarPopoverContainer,
  calendarUnderlay: datePickerCalendarPopoverUnderlay,
  dialog: datePickerDialog,
  dateFieldContainer: datePickerDateFieldContainer,
  invalidIndicator: datePickerInvalidIndicator,
}
