'use client'

import React from 'react'
import { makeTheme, createThemeProvider } from '../providers/Theme'
import { accordionTheme } from './Accordion'
import alertsTheme from './Alerts'
import { container, grid, gridItem, main } from './Box'
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
import { carouselContainer, carouselNavigationButtons, carouselSlideContainer } from './Carousel'
import { checkBox, checkMark, checkMarkIcon, checkboxContainer, checkboxLabel } from './Checkbox'
import { checkboxGroup, checkboxGroupItemsGroup } from './CheckboxGroup'
import {
  datePickerButton,
  datePickerCalendarPopoverContainer,
  datePickerCalendarPopoverUnderlay,
  datePickerContainer,
  datePickerDateField,
  datePickerDateSegment,
  datePickerIcon,
  datePickerLabel,
} from './DatePicker'
import { imgTheme } from './Image'
import lightboxTheme from './LightBox'
import { radio, radioLabel, selectedMark } from './Radio'
import { radioGroup, radioGroupItemsGroup } from './RadioGroup'
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
  main: (props) => main(props),
  gridItem: (props) => gridItem(props),
  grid: (props) => grid(props),
  container: (props) => container(props),
  accordion: accordionTheme,
  carousel: {
    container: (props) => carouselContainer(props),
    slideContainer: (props) => carouselSlideContainer(props),
    navigationButtons: (props) => carouselNavigationButtons(props),
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
    dateSegment: (props) => datePickerDateSegment(props),
    label: (props) => datePickerLabel(props),
    calendarPopover: (props) => datePickerCalendarPopoverContainer(props),
    calendarUnderlay: (props) => datePickerCalendarPopoverUnderlay(props),
  },
  popover: {
    button: (props) => button(props),
    popover: () => 'border-2 text-black p-4 bg-gray-300',
  },
  typography: (props) => typography(props),
  button: (props) => button(props),
  sidePanel: {
    wrapper: (props) => sidePanelWrapper(props),
    container: (props) => sidePanelContainer(props),
    innerContainer: (props) => sidePanelInnerContainer(props),
  },
  lightBox: lightboxTheme,
  shareButton: {
    icon: (props) => shareButtonIcon(props),
    button: (props) => shareButton(props),
    container: (props) => shareButtonContainer(props),
    linksList: (props) => shareButtonLinksList(props),
    link: (props) => shareButtonLink(props),
    linkIcons: (props) => shareButtonLinkIcons(props),
  },
  checkbox: {
    container: (props) => checkboxContainer(props),
    label: (props) => checkboxLabel(props),
    checkBox: (props) => checkBox(props),
    checkMark: (props) => checkMark(props),
    checkMarkIcon: (props) => checkMarkIcon(props),
    errorMessage: (props) => typography(props),
  },
  radio: {
    label: (props) => radioLabel(props),
    radio: (props) => radio(props),
    selectedMark: (props) => selectedMark(props),
    errorMessage: (props) => typography(props),
  },
  radioGroup: {
    radioGroup: (props) => radioGroup(props),
    radioGroupItemsGroup: (props) => radioGroupItemsGroup(props),
    errorMessage: (props) => typography(props),
  },
  checkboxGroup: {
    checkboxGroup: (props) => checkboxGroup(props),
    checkboxGroupItemsGroup: (props) => checkboxGroupItemsGroup(props),
    errormessage: (props) => typography(props),
  },
  select: {
    button: (props) => button(props),
    ul: (props) =>
      typography({
        ...props,
        className: 'outline outline-2 outline-white outline-offset-2 p-2 my-4 rounded-md w-full flex flex-col gap-6',
      }),
    popover: (props) => button({ ...props, className: 'w-[var(--select-container-width)]' }),
    errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
    wrapper: () => 'flex flex-col gap-4 relative',
    container: () => 'flex flex-col gap-4',
    li: () => 'transition w-full hover:text-gray-300 focus-ring-white',
  },
  textarea: {
    wrapper: () => 'flex flex-col',
    container: () => 'flex items-center gap-4',
    label: () => 'text-gray-3 px-6',
    input: (props) => textArea(props),
    errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
  },
  textInput: {
    wrapper: () =>
      `flex flex-col rounded-md px-4 py-1 mb-3 m-0.5 border-2 aria-disabled:pointer-events-none aria-disabled:opacity-30 focus-ring-black`,
    label: () => 'text-xs',
    container: () => 'flex items-center gap-4',
    input: () => '',
    errorMessage: (props) => typography({ ...props, size: 'footnotes', isError: true }),
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
})

export default React.memo(createThemeProvider(BaseTheme))
