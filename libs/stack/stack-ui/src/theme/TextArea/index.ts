import { tv } from 'tailwind-variants'
import typography from '../Typography'

export const textArea = tv({
  slots: {
    container: '',
    input:
      'w-full min-h-32 rounded-2xl px-6 h-12 border-2 border-solid transition duration-300 ease-in-out text-gray-2 placeholder:text-gray-2 focus-ring-black',
    label: 'text-gray-3 px-6',
    wrapper: 'flex flex-col',
    inputContainer: 'flex items-center gap-4',
    errorMessage: typography({
      size: 'footnotes',
      isError: true,
    }),
  },
  compoundVariants: [
    {
      isError: true,
      class: {
        input: 'border-red-500',
      },
    },
  ],
})
