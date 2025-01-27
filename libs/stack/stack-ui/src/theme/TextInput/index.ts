import { tv } from 'tailwind-variants'
import typography from '../Typography'

const textInputWrapper = tv({
  base: `
    relative
    group
    flex
    items-center
    gap-4
    rounded-md
    px-4
    py-1
    mb-3
    m-0.5
    border-2
    aria-disabled:pointer-events-none
    aria-disabled:opacity-30
    focus-ring-black
  `,
  variants: {
    isError: {
      true: `border-error`,
    },
  },
})

const textInputInputWrapper = tv({
  base: `flex flex-col order-2`,
})

const textInputContainer = tv({
  base: `flex items-center gap-2`,
})

const textInputLabel = tv({
  base: `
    group-has-[:required]:after:content-["_*"]
    group-has-[:required]:after:text-red-500
    text-xs
  `,
})

const textInputInput = tv({
  base: ``,
})

const textInputErrorMessage = tv({
  extend: typography,
  base: `ml-0`,
  defaultVariants: {
    isError: true,
    size: 'footnotes',
  },
})

const textInputIcon = tv({
  base: [typography(), `order-1`],
  variants: {
    isDisabled: {
      true: `text-gray-300`,
    },
  },
})

const textInputErrorIcon = tv({
  base: [typography({ isError: true }), `order-3`],
  variants: {
    isError: {
      false: `hidden`,
    },
  },
})

const textInputTheme = {
  wrapper: textInputWrapper,
  container: textInputContainer,
  inputWrapper: textInputInputWrapper,
  label: textInputLabel,
  input: textInputInput,
  errorMessage: textInputErrorMessage,
  icon: textInputIcon,
  errorIcon: textInputErrorIcon,
}

export default textInputTheme
