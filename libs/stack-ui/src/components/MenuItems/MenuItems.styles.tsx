import tw, { styled, css } from 'twin.macro'
import { ButtonWithForwardRef } from '../Button'

export const StyledMenuItems = styled.ul(() => tw`text-center`)

export const StyledMenuList = styled.li(() => tw`flex items-center justify-center py-2`)

export const StyledMenuWrapper = styled.div(
  () =>
    tw`w-full h-full min-h-[728px] shrink-0 overflow-y-hidden flex flex-col items-center justify-start overflow-auto pb-mobile-lg pt-[5.5rem] lg:pt-32 lg:pb-desktop-lg`,
)

export const StyledMenuButton = styled(ButtonWithForwardRef)(
  () => css`
    ${tw`text-xl text-gray-2 hover:text-white`}
    span, a {
      ${tw`h-full w-full`}
    }
    a {
      ${tw`flex items-center`}
    }
  `,
)
