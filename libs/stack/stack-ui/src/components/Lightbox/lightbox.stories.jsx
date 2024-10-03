import Image from 'next/image'
import image from '../../../static/images/image.png'
import LightboxControlledState from '../../storybook/Lightbox/LightboxControlledState'
import Lightbox from '.'

const Template = (args) => {
  return (
    <Lightbox {...args}>
      <Image src={image} width={570} height={762} alt="Lightbox preview" />
    </Lightbox>
  )
}

const TemplateControlledState = (args) => {
  return (
    <LightboxControlledState {...args}>
      <Image src={image} width={570} height={762} alt="Lightbox preview" />
    </LightboxControlledState>
  )
}

export default {
  title: 'BASE COMPONENTS/Lightbox',
  component: Lightbox,

  argTypes: {
    label: {
      description: 'Used for accessibility and/or for displaying a label',

      control: {
        type: 'text',
      },
    },

    thumbnailContent: {
      description: `The lightbox's preview content`,
    },

    onOpenChange: {
      description:
        'Callback for executing some code when the state of the lightbox changes. Passes a boolean `isOpen`. In controlled state mode, you can use this function to change the controlled state every time the state would normally be changed in non-controlled state mode',
    },

    closeButton: {
      description: `To replace the lightbox's default close button`,
    },

    closeButtonAriaLabel: {
      description: `Adds accessibility to the lightbox's default close button`,

      control: {
        type: 'text',
      },
    },

    isOpen: {
      description: 'Handles an optional controlled state',
    },

    setOpen: {
      description: `Allows the lightbox component's thumbnail to still controll the lightbox's state even in a case of controlled state`,
    },
  },

  args: {
    label: 'Open Dialog',
    thumbnailContent: <Image src={image} width={570} height={762} alt="Dog picture" />,
    onOpenChange: (isOpen) => console.log(`Lightbox is now ${isOpen}`),
    closeButtonAriaLabel: 'Close the modal',
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}

export const ControlledState = {
  render: TemplateControlledState.bind({}),
  name: 'ControlledState',
}
