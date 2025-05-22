/* eslint-disable no-template-curly-in-string */
import { useState } from 'react'
import { SidePanelContextProvider, useSidePanel } from '../../providers/SidePanel'
import Button, { ButtonWithForwardRef } from '../Button'
import Modal from '../Modal'
import ModalDialog from '../Modal/components/ModalDialog'
import ModalOverlay from '../Modal/components/ModalOverlay'
import Typography from '../Typography'
import SidePanel from '.'

/**
 * @typedef {import('@storybook/react').Meta<typeof SidePanel>} Meta
 * @typedef {import('@storybook/react').StoryObj<typeof SidePanel>} Story
 */

const SidePanelClose = () => {
  const { buttonProps } = useSidePanel()
  if (buttonProps == null) {
    return null
  }
  return (
    <ButtonWithForwardRef
      customTheme="absolute top-0 right-0 m-8"
      {...buttonProps?.closeButtonProps}
      ref={buttonProps?.closeButtonRef}
    >
      <Typography tokens={{ color: 'white', size: 'h3' }}>Close</Typography>
    </ButtonWithForwardRef>
  )
}

const SidePanelOpen = () => {
  const { buttonProps } = useSidePanel()
  if (buttonProps == null) {
    return null
  }
  return (
    <ButtonWithForwardRef {...buttonProps?.openButtonProps} ref={buttonProps?.openButtonRef}>
      Open
    </ButtonWithForwardRef>
  )
}

/**
 * @param {import('./interface').TSidePanelProps} args
 */
const Template = (args) => (
  <SidePanelContextProvider
    onOpenChange={(isOpen) => console.log(`Side panel is now ${isOpen ? 'opened' : 'closed'}!`)}
  >
    <SidePanelOpen />
    <SidePanel {...args}>
      <SidePanelClose />
      <Typography tokens={{ color: 'white', size: 'h3' }}>Hello world!</Typography>
    </SidePanel>
  </SidePanelContextProvider>
)

/**
 * @param {import('./interface').TSidePanelProps} args
 */
const TemplateDefaultOpen = (args) => (
  <SidePanelContextProvider
    onOpenChange={(isOpen) => console.log(`Side panel is now ${isOpen ? 'opened' : 'closed'}!`)}
    defaultOpen
  >
    <SidePanelOpen />
    <SidePanel {...args}>
      <SidePanelClose />
      <Typography tokens={{ color: 'white', size: 'h3' }}>Hello world!</Typography>
    </SidePanel>
  </SidePanelContextProvider>
)

/**
 * @param {import('./interface').TSidePanelProps} args
 */
const TemplateControlled = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button handlePress={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</Button>
      <SidePanelContextProvider
        isOpen={isOpen}
        onOpenChange={(newIsOpen) => {
          console.log(`Side panel is now ${newIsOpen ? 'opened' : 'closed'}!`)
          setIsOpen(newIsOpen)
        }}
      >
        <SidePanel {...args}>
          <Typography tokens={{ color: 'white', size: 'h3' }}>Hello world!</Typography>
        </SidePanel>
      </SidePanelContextProvider>
    </>
  )
}

/**
 * @type {Meta}
 */
const meta = {
  title: 'BASE COMPONENTS/Side Panel',
  component: SidePanel,
  subcomponents: { Modal, ModalOverlay, ModalDialog, SidePanelContextProvider },
  parameters: { layout: 'fullscreen' },
  argTypes: {
    TransitionAnimation: { control: false, table: { defaultValue: { summary: 'RenderWithSlide' } } },
    PanelTransition: { control: false, table: { defaultValue: { summary: 'SidePanelTransition' } } },
    closeBtnRender: {
      control: false,
      description:
        'Shortcut to render a close button. You can also pass a regular button in the `children` prop. `closeBtnRender` will render as a direct child of the `${themeName}.wrapper` element',
    },
    isDismissable: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
    shouldCloseOnInteractOutside: { control: 'boolean', table: { defaultValue: { summary: 'true' } } },
    isKeyboardDismissDisabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    title: { description: "Title for the side panel's modal's dialog. Gets applied to the element with `role=dialog`" },
  },
}

export default meta

/**
 * @type {Story}
 */
export const Default = {
  render: Template.bind({}),
  name: 'Default',
}

/**
 * @type {Story}
 */
export const DefaultOpen = {
  render: TemplateDefaultOpen.bind({}),
  name: 'Default Open',
}

/**
 * @type {Story}
 */
export const Controlled = {
  render: TemplateControlled.bind({}),
  name: 'Controlled',
}
