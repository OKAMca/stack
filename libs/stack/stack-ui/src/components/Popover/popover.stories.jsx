/* eslint-disable jsx-a11y/anchor-is-valid */
import { OverlayProvider } from 'react-aria'
import Popover from './index'

const Template = (args) => (
  <div>
    <OverlayProvider>
      <Popover {...args}>
        <a href="#" className="focus-ring-black">
          Hello world!
        </a>
        <a href="#" className="focus-ring-black">
          Hello world! 2
        </a>
        <a href="#" className="focus-ring-black">
          Hello world! 3
        </a>
      </Popover>
    </OverlayProvider>
  </div>
)

export default {
  title: 'BASE COMPONENTS/Popover',
  component: Popover,

  args: {
    as: 'span',

    buttonProps: {
      children: 'Open popover',
    },
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    variant: 'p',
    offset: 20,
  },
}

export const ClosesWhenInteractingOutside = {
  render: Template.bind({}),
  name: 'Closes when inteacting outside',

  args: {
    variant: 'p',
    offset: 20,
    isDismissable: true,
    shouldCloseOnBlur: true,
  },
}
