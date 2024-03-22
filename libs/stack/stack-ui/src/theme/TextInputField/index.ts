import { tv } from 'tailwind-variants'
import typography from '../Typography'

export const textInput = tv({
  slots: {
    wrapper:
      'flex flex-col rounded-md px-4 py-1 mb-3 m-0.5 border-2 aria-disabled:pointer-events-none aria-disabled:opacity-30 focus-ring-black',
    container: '',
    inputContainer: 'flex items-center gap-4',
    label: 'text-xs',
    input: '',
    errorMessage: typography({
      size: 'footnotes',
      isError: true,
    }),
  },
})
