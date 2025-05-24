import tw from 'twin.macro'
import type { ComboBoxVariant, PopoverOrientation } from './ComboBox.interface'

const bgColorVariants = {
  primary: tw`bg-brand-color-1-3`,
  gray: tw`bg-gray-1`,
}

const popoverOrientation = {
  left: tw`left-0`,
  right: tw`right-0`,
}

export const getBgVariant = (variant: ComboBoxVariant) => bgColorVariants[variant]

export const getPopOrientation = (orientation: PopoverOrientation) => popoverOrientation[orientation]

export const popoverStyles = tw`absolute top-full mt-2 text-white rounded-2xl px-0 py-0 z-30 w-[100%] md:w-[20rem] md:max-w-[50vw] max-h-[50vh] overflow-x-auto`
export const arrowButtonStyles = tw`text-gray-2 p-0 hover:bg-opacity-0 min-h-0 min-w-0 lg:min-h-0 lg:min-w-0 lg:p-0`
