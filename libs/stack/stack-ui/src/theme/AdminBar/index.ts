import { tv } from 'tailwind-variants'

/**
 * AdminBar theme components
 *
 * The AdminBar is a top bar that appears when in draft mode,
 * providing administrative controls and status information.
 */

// Main container for the AdminBar
export const adminBarContainer = tv({
  base: 'w-full bg-gray-100 py-2 px-4 border-gray-200 fixed left-0 right-0 z-50',
  variants: {
    position: {
      top: 'top-0 border-b',
      bottom: 'bottom-0 border-t',
    },
    fullWidth: {
      true: 'max-w-full',
    },
    background: {
      grey: 'bg-gray-100',
      dark: 'bg-gray-800 text-white',
      light: 'bg-white',
    },
    padding: {
      small: 'py-1 px-2',
      medium: 'py-2 px-4',
      large: 'py-3 px-6',
    },
  },
  defaultVariants: {
    position: 'top',
    background: 'grey',
    padding: 'medium',
  },
})

// Content container within the AdminBar
export const adminBarContent = tv({
  base: 'flex items-center',
  variants: {
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    gap: {
      small: 'gap-2',
      medium: 'gap-4',
      large: 'gap-6',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    justify: 'between',
    gap: 'medium',
    wrap: false,
  },
})

// Button styles specific to the AdminBar
export const adminBarButton = tv({
  base: 'px-3 py-1 rounded text-sm font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    },
    size: {
      small: 'text-xs px-2 py-0.5',
      medium: 'text-sm px-3 py-1',
      large: 'text-base px-4 py-2',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'medium',
  },
})

// Status indicator for the AdminBar
export const adminBarStatus = tv({
  base: 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
  variants: {
    status: {
      draft: 'bg-yellow-100 text-yellow-800',
      published: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
    },
  },
  defaultVariants: {
    status: 'draft',
  },
})

// Date picker styles specific to the AdminBar
export const adminBarDatePicker = tv({
  base: 'border rounded px-2 py-1 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500',
  variants: {
    size: {
      small: 'text-xs px-2 py-0.5',
      medium: 'text-sm px-3 py-1',
      large: 'text-base px-4 py-2',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

// Error component styles specific to the AdminBar
export const adminBarError = tv({
  base: 'flex items-center justify-center bg-red-50 text-red-700 px-3 py-1 rounded-md text-sm',
  variants: {
    severity: {
      low: 'bg-yellow-50 text-yellow-700',
      medium: 'bg-red-50 text-red-700',
      high: 'bg-red-100 text-red-800 font-bold',
    },
    hasBorder: {
      true: 'border border-red-300',
      false: '',
    },
  },
  defaultVariants: {
    severity: 'medium',
    hasBorder: true,
  },
})

// Typography style for error messages in the AdminBar
export const adminBarErrorTypography = tv({
  base: 'text-red-700 text-sm font-medium',
  variants: {
    severity: {
      low: 'text-yellow-700',
      medium: 'text-red-700',
      high: 'text-red-800 font-bold',
    },
  },
  defaultVariants: {
    severity: 'medium',
  },
})

// DraftMode wrapper styles
export const adminBarDraftMode = tv({
  base: 'flex items-center gap-2',
  variants: {
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    align: 'start',
  },
})

// Export the theme components
export const adminBarTheme = {
  container: adminBarContainer,
  content: adminBarContent,
  button: adminBarButton,
  status: adminBarStatus,
  datePicker: adminBarDatePicker,
  error: adminBarError,
  errorTypography: adminBarErrorTypography,
  draftMode: adminBarDraftMode,
}
