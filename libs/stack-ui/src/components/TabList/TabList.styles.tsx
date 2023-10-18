import tw, { styled } from 'twin.macro'
import { buttonSpacing } from '../Button/styles'

export const StyledLabel = styled.div(() => [
  buttonSpacing,
  tw`justify-start md:justify-center md:my-4 px-0 md:px-0 pr-4 md:pr-4 mr-0 mb-0`,
])

export const StyledTabContainer = styled.div(tw`flex items-center justify-center`)

export const StyledNav = styled.nav(tw`flex flex-row gap-4 my-4 items-start flex-wrap`)
