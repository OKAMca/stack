import { tv } from 'tailwind-variants'

export const datePickerContainer = tv({
  base: 'relative inline-flex flex-col text-left',
})

export const datePickerButton = tv({
  base: 'flex items-center border-2 border-color-1-500 rounded focus-ring-black',
})

export const datePickerCalendarPopoverUnderlay = tv({
  base: 'fixed inset-0',
})

export const datePickerCalendarPopoverContainer = tv({
  base: 'absolute top-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-8 z-10',
})

export const datePickerDateField = tv({
  base: 'pr-1 flex gap-2',
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

export const datePickerDateSegment = tv({
  base: 'focus-ring-black',
})

export const datePickerIcon = tv({
  base: 'text-color-1-500 bg-color-1-100 border-l-2 border-color-1-500 h-full py-2 px-2',
})

export const datePickerLabel = tv({
  base: 'text-color-1-500 font-bold px-2',
})
