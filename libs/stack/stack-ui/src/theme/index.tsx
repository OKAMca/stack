'use client'

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
import { formContainer, formField, formSubmitButton } from './Form'
import { formTextInputField } from './Form/fields'
import formTextAreaField from './Form/fields/FormTextArea'
import { imgTheme } from './Image'
import { lightBoxCloseBtn, lightBoxContainer, lightBoxLabel, lightBoxWrapper } from './LightBox'
import { radio, radioLabel, selectedMark } from './Radio'
import { radioGroup, radioGroupItemsGroup } from './RadioGroup'
import {
  selectButton,
  selectContainer,
  selectErrorMessage,
  selectList,
  selectListItem,
  selectPopover,
  selectWrapper,
} from './Select'
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
import { textInput } from './TextInputField'
import typography from './Typography'

const BaseTheme = makeTheme({
  main: (props) => main(props),
  gridItem: (props) => gridItem(props),
  grid: (props) => grid(props),
  container: (props) => container(props),
  accordion: {
    container: (props) => accordionContainer(props),
    button: (props) => accordionButton(props),
    title: (props) => accordionTitle(props),
    icon: (props) => accordionIcon(props),
    region: (props) => accordionRegion(props),
    content: (props) => accordionContent(props),
  },
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
  form: {
    container: (props) => formContainer(props),
    submitButton: (props) => formSubmitButton(props),
    field: (props) => formField(props),
    textInputField: {
      wrapper: (props) => formTextInputField(props).wrapper(),
      label: (props) => formTextInputField(props).label(),
      container: (props) => formTextInputField(props).container(),
      inputContainer: (props) => formTextInputField(props).inputContainer(),
      input: (props) => formTextInputField(props).input(),
      errorMessage: (props) => formTextInputField(props).errorMessage(),
    },
    textAreaField: {
      wrapper: (props) => formTextAreaField(props).wrapper(),
      label: (props) => formTextAreaField(props).label(),
      container: (props) => formTextAreaField(props).container(),
      inputContainer: (props) => formTextAreaField(props).inputContainer(),
      input: (props) => formTextAreaField(props).input(),
      errorMessage: (props) => formTextAreaField(props).errorMessage(),
    },
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
  lightBox: {
    wrapper: (props) => lightBoxWrapper(props),
    container: (props) => lightBoxContainer(props),
    closeBtn: (props) => lightBoxCloseBtn(props),
    label: (props) => lightBoxLabel(props),
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
    button: (props) => selectButton(props),
    ul: (props) => selectList(props),
    popover: (props) => selectPopover(props),
    errorMessage: (props) => selectErrorMessage(props),
    wrapper: (props) => selectWrapper(props),
    container: (props) => selectContainer(props),
    li: (props) => selectListItem(props),
  },
  textarea: {
    container: (props) => textArea(props).container(),
    wrapper: (props) => textArea(props).wrapper(),
    label: (props) => textArea(props).label(),
    inputContainer: (props) => textArea(props).inputContainer(),
    input: (props) => textArea(props).input(),
    errorMessage: (props) => textArea(props).errorMessage(),
  },
  textInput: {
    wrapper: (props) => textInput(props).wrapper(),
    label: (props) => textInput(props).label(),
    container: (props) => textInput(props).container(),
    inputContainer: (props) => textInput(props).inputContainer(),
    input: (props) => textInput(props).input(),
    errorMessage: (props) => textInput(props).errorMessage(),
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
})

export default React.memo(createThemeProvider(BaseTheme))
