/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Meta, StoryObj } from '@storybook/react'
import Typography from '../Typography'
import PopoverButton from './components/Button'

const meta: Meta<typeof PopoverButton> = {
  title: 'BASE COMPONENTS/Popover',
  component: PopoverButton,
  args: {
    as: 'span',
    label: 'Open popover',
    children: <Typography>Popover content</Typography>,
    offset: 20,
    shouldCloseOnInteractOutside: () => false,
    isKeyboardDismissDisabled: true,
  },
}

export default meta

type Story = StoryObj<typeof PopoverButton>

export const Default: Story = {
  name: 'Default',
}

export const ClosesWhenInteractingOutside: Story = {
  name: 'Closes when inteacting outside',
  args: {
    shouldCloseOnInteractOutside: () => true,
    isKeyboardDismissDisabled: false,
  },
}
