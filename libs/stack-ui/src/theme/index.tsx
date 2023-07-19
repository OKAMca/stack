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
import {
  calendarCell,
  calendarCellContainer,
  calendarCellFormattedDate,
  calendarContainer,
  calendarDayLabel,
  calendarHeaderContainer,
  calendarNavigationButtons,
  calendarNavigationButtonsContainer,
  calendarTable,
} from './Calendar'
import { checkBox, checkMark, checkboxLabel } from './Checkbox'
import {
  datePickerButton,
  datePickerCalendarPopoverContainer,
  datePickerCalendarPopoverUnderlay,
  datePickerContainer,
  datePickerDateField,
  datePickerIcon,
  datePickerLabel,
} from './DatePicker'
import { lightBoxCloseBtn, lightBoxContainer } from './LightBox'
import { menuTheme } from './Menu'
import {
  shareButton,
  shareButtonLink,
  shareButtonLinkButton,
  shareButtonLinksList,
  shareButtonListContainer,
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
  calendar: {
    container: (props) => calendarContainer(props),
    header: (props) => calendarHeaderContainer(props),
    navigationButtonsContainer: (props) => calendarNavigationButtonsContainer(props),
    navigationButtons: (props) => calendarNavigationButtons(props),
    table: (props) => calendarTable(props),
    dayLabel: (props) => calendarDayLabel(props),
    cellContainer: (props) => calendarCellContainer(props),
    cell: (props) => calendarCell(props),
    cellDate: (props) => calendarCellFormattedDate(props),
  },
  datePicker: {
    container: (props) => datePickerContainer(props),
    button: (props) => datePickerButton(props),
    icon: (props) => datePickerIcon(props),
    dateField: (props) => datePickerDateField(props),
    label: (props) => datePickerLabel(props),
    calendarPopover: (props) => datePickerCalendarPopoverContainer(props),
    calendarUnderlay: (props) => datePickerCalendarPopoverUnderlay(props),
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
    menuTrigger: (props) => shareButton(props),
    menuListContainer: (props) => shareButtonListContainer(props),
    menuList: (props) => shareButtonLinksList(props),
    menuItem: (props) => shareButtonLink(props),
    menuItemButton: (props) => shareButtonLinkButton(props),
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
  menu: menuTheme,
})

export default React.memo(createThemeProvider(BaseTheme))
