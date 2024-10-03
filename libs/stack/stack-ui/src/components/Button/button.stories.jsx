import Icon from '../Icon'
import Button from '.'

const Template = (args) => <Button {...args}>Button</Button>

const IconButton = (args) => (
  <Button {...args}>
    <span>Button</span>
    <Icon icon="ArrowRight" />
  </Button>
)

export default {
  title: 'BASE COMPONENTS/Button',
  component: Button,

  args: {
    as: 'button',
    disabled: false,
  },
}

export const Primary = {
  render: Template.bind({}),
  name: 'Primary',
  args: {},
}

export const Large = {
  render: Template.bind({}),
  name: 'Large',

  args: {
    tokens: {
      size: 'large',
      shape: 'circular',
    },
  },
}

export const Rounded = {
  render: Template.bind({}),
  name: 'Rounded',

  args: {
    tokens: {
      shape: 'rounded',
    },
  },
}

export const Outline = {
  render: Template.bind({}),
  name: 'Outline',

  args: {
    tokens: {
      buttonStyle: 'outline',
    },
  },
}

export const Hollow = {
  render: Template.bind({}),
  name: 'Hollow',

  args: {
    tokens: {
      buttonStyle: 'hollow',
    },
  },
}

export const IconStory = {
  render: IconButton.bind({}),
  name: 'Icon',

  args: {
    tokens: {
      buttonStyle: 'outline',
      intent: 'error',
    },
  },
}
