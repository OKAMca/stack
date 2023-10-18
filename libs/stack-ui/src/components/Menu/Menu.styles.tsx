import tw, { css } from 'twin.macro'

const MenuContainerStyle = css`
  ${tw`m-auto fixed left-0 top-0 w-full bg-transparent lg:max-w-[394px] h-[100vh]`}

  & > div {
    ${tw`h-full`}
  }
`

export const divWrapperStyle = tw`
  h-full w-full lg:absolute lg:left-0 overflow-auto
`

export const closeBtnStyle = css`
  ${tw`fixed -top-1.5 left-0 z-10 transform scale-[59%] lg:scale-[79%] lg:right-6 lg:top-2.5 origin-center bg-black`}
  svg {
    ${tw`transform scale-[65%] lg:scale-[75%]`}
  }
`

export const innerDivStyle = css`
  ${tw`bg-transparent h-full w-full`}
`

export const tabWrapperStyle = css`
  ${tw`absolute top-0 left-0 right-0 bottom-0 z-10 lg:right-auto lg:left-[394px] lg:w-[calc(100vw - 394px)] h-[100vh] overflow-auto`}
`

export default MenuContainerStyle
