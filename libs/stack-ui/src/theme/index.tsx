import React from 'react'
import { makeTheme, createThemeProvider } from '../providers/Theme'
import {
  accordionButton,
  accordionContainer,
  accordionContent,
  accordionIcon,
  accordionRegion,
  accordionTitle,
} from './Accordion'
import button from './Button'
import { checkBox, checkMark, checkboxLabel } from './Checkbox'
import { lightBoxCloseBtn, lightBoxContainer } from './LightBox'
import {
  shareButton,
  shareButtonContainer,
  shareButtonIcon,
  shareButtonLink,
  shareButtonLinkIcons,
  shareButtonLinksList,
} from './ShareButton'
import { sidePanelWrapper, sidePanelContainer, sidePanelInnerContainer } from './SidePanel'
import { textArea } from './TextArea'
import typography from './Typography'

const BaseTheme = makeTheme({
  accordion: {
    container: (props) => accordionContainer(props),
    button: (props) => accordionButton(props),
    title: (props) => accordionTitle(props),
    icon: (props) => accordionIcon(props),
    region: (props) => accordionRegion(props),
    content: (props) => accordionContent(props),
  },
  typography: (props) => typography(props),
  button: (props) => button(props),
  sidePanel: {
    wrapper: (props) => sidePanelWrapper(props),
    container: (props) => sidePanelContainer(props),
    innerContainer: (props) => sidePanelInnerContainer(props),
  },
  lightBox: {
    container: (props) => lightBoxContainer(props),
    closeBtn: (props) => lightBoxCloseBtn(props),
  },
  shareButton: {
    icon: (props) => shareButtonIcon(props),
    button: (props) => shareButton(props),
    container: (props) => shareButtonContainer(props),
    linksList: (props) => shareButtonLinksList(props),
    link: (props) => shareButtonLink(props),
    linkIcons: (props) => shareButtonLinkIcons(props),
  },
  checkbox: {
    label: (props) => checkboxLabel(props),
    checkBox: (props) => checkBox(props),
    checkMark: (props) => checkMark(props),
    errorMessage: (props) => typography(props),
  },
  select: {
    button: (props) => button(props),
    ul: (props) => typography({ ...props, className: 'my-4 rounded-md border w-full flex flex-col' }),
    popover: (props) => button(props),
    errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
    wrapper: () => 'flex flex-col gap-4 relative',
    container: () => 'flex flex-col gap-4',
    li: () => 'transition w-full',
  },
  textarea: {
    container: () => 'flex flex-col',
    label: () => 'text-gray-3 px-6',
    input: (props) => textArea(props),
  },
  textInput: {
    wrapper: () =>
      `flex flex-col rounded-md px-4 py-1 mb-3 m-0.5 outline aria-disabled:pointer-events-none aria-disabled:opacity-30`,
    label: () => 'text-xs',
    container: () => 'flex items-center gap-4',
    input: () => '',
    errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
  },
})

export default React.memo(createThemeProvider(BaseTheme))
