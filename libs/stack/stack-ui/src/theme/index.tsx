'use client'

import * as React from 'react'
import { createThemeProvider, makeTheme } from '../providers/Theme'
import { accordionTheme } from './Accordion'
import alertsTheme from './Alerts'
import { container, grid, gridItem, main } from './Box'
import button from './Button'
import { calendarTheme } from './Calendar'
import carouselTheme from './Carousel'
import { checkBox, checkboxContainer, checkboxLabel, checkMark, checkMarkIcon } from './Checkbox'
import { checkboxGroup, checkboxGroupItemsGroup } from './CheckboxGroup'
import comboBoxTheme from './ComboBox'
import { datePickerTheme } from './DatePicker'
import { imgTheme } from './Image'
import lightboxTheme from './LightBox'
import listBoxTheme from './ListBox'
import popoverTheme from './Popover'
import { printButton, printButtonIcon } from './PrintButton'
import { radio, radioLabel, selectedMark } from './Radio'
import { radioGroup, radioGroupItemsGroup } from './RadioGroup'
import { searchIcon, searchInput } from './Search'
import {
  shareButton,
  shareButtonContainer,
  shareButtonIcon,
  shareButtonLink,
  shareButtonLinkIcons,
  shareButtonLinksList,
} from './ShareButton'
import { sidePanelContainer, sidePanelInnerContainer, sidePanelWrapper } from './SidePanel'
import { skipToMain } from './SkipToMain'
import tabListTheme from './TabList'
import tagGroupTheme from './TagGroup'
import { textArea } from './TextArea'
import textInputTheme from './TextInput'
import typography from './Typography'

const BaseTheme = makeTheme({
  main: props => main(props),
  gridItem: props => gridItem(props),
  grid: props => grid(props),
  container: props => container(props),
  accordion: accordionTheme,
  carousel: carouselTheme,
  calendar: calendarTheme,
  datePicker: datePickerTheme,
  popover: popoverTheme,
  typography: props => typography(props),
  button: props => button(props),
  link: button,
  sidePanel: {
    wrapper: props => sidePanelWrapper(props),
    container: props => sidePanelContainer(props),
    innerContainer: props => sidePanelInnerContainer(props),
  },
  comboBox: comboBoxTheme,
  lightBox: lightboxTheme,
  printButton: {
    icon: props => printButtonIcon(props),
    button: props => printButton(props),
  },
  shareButton: {
    icon: props => shareButtonIcon(props),
    button: props => shareButton(props),
    container: props => shareButtonContainer(props),
    linksList: props => shareButtonLinksList(props),
    link: props => shareButtonLink(props),
    linkIcons: props => shareButtonLinkIcons(props),
  },
  skipToMain: props => skipToMain(props),
  checkbox: {
    container: props => checkboxContainer(props),
    label: props => checkboxLabel(props),
    checkBox: props => checkBox(props),
    checkMark: props => checkMark(props),
    checkMarkIcon: props => checkMarkIcon(props),
    errorMessage: props => typography(props),
  },
  radio: {
    label: props => radioLabel(props),
    radio: props => radio(props),
    selectedMark: props => selectedMark(props),
    errorMessage: props => typography(props),
  },
  radioGroup: {
    radioGroup: props => radioGroup(props),
    radioGroupItemsGroup: props => radioGroupItemsGroup(props),
    errorMessage: props => typography(props),
  },
  checkboxGroup: {
    checkboxGroup: props => checkboxGroup(props),
    checkboxGroupItemsGroup: props => checkboxGroupItemsGroup(props),
    errormessage: props => typography(props),
  },
  select: {
    button: props => button(props),
    ul: props =>
      typography({
        ...props,
        className: 'outline outline-2 outline-white outline-offset-2 p-2 my-4 rounded-md w-full flex flex-col gap-6',
      }),
    popover: props => button({ ...props, className: 'w-[var(--select-container-width)]' }),
    errorMessage: props => typography({ ...props, size: 'footnotes', isError: true }),
    wrapper: () => 'flex flex-col gap-4 relative',
    container: () => 'flex flex-col gap-4',
    list: () => 'flex flex-col gap-4',
    li: () => 'transition w-full hover:text-gray-300 focus-ring-white',
    headerText: () => 'text-gray-300',
    section: () => 'flex flex-col gap-4',
  },
  textarea: {
    wrapper: () => 'flex flex-col',
    container: () => 'flex items-center gap-4',
    label: () => 'text-gray-3 px-6',
    input: props => textArea(props),
    errorMessage: props => typography({ ...props, size: 'footnotes', isError: true }),
  },
  textInput: textInputTheme,
  search: {
    wrapper: () => 'min-w-fit sm:w-80 flex flex-col gap-2',
    container: () =>
      'relative flex items-center outline outline-2 outline-gray-300 focus-within:outline focus-within:outline-black focus-within:outline-2',
    label: () => 'text-gray-3',
    input: props => searchInput(props),
    icon: props => searchIcon(props),
    errorMessage: props => typography({ ...props, size: 'footnotes', isError: true }),
  },
  menu: {
    sidePanel: {
      wrapper: () => ``,
      container: () => '',
      innerContainer: () => '',
    },
    wrapper: () => '',
  },
  menuItem: {
    wrapper: () => ``,
    container: () => ``,
    innerContent: () => ``,
    button: () => ``,
    anchor: () => ``,
  },
  img: imgTheme,
  alerts: alertsTheme,
  tagGroup: tagGroupTheme,
  tabList: tabListTheme,
  listBox: listBoxTheme,
})

export default React.memo(createThemeProvider(BaseTheme))
