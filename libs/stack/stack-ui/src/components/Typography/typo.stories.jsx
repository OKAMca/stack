import { Typography } from './index'

function Template(args) {
  return (
    <div>
      <Typography {...args}>Hello world!</Typography>
    </div>
  )
}

export default {
  title: 'BASE COMPONENTS/Typography',
  component: Typography,
}

export const Heading1 = {
  render: Template.bind({}),
  name: 'Heading 1',

  args: {
    as: 'h1',

    tokens: {
      size: 'h1',
    },
  },
}

export const Heading2 = {
  render: Template.bind({}),
  name: 'Heading 2',

  args: {
    as: 'h2',

    tokens: {
      size: 'h2',
    },
  },
}

export const Heading3 = {
  render: Template.bind({}),
  name: 'Heading 3',

  args: {
    as: 'h3',

    tokens: {
      size: 'h3',
    },
  },
}

export const Heading4 = {
  render: Template.bind({}),
  name: 'Heading 4',

  args: {
    as: 'h4',

    tokens: {
      size: 'h4',
    },
  },
}

export const Heading5 = {
  render: Template.bind({}),
  name: 'Heading 5',

  args: {
    as: 'h5',

    tokens: {
      size: 'h5',
    },
  },
}

export const Heading6 = {
  render: Template.bind({}),
  name: 'Heading 6',

  args: {
    as: 'h6',

    tokens: {
      size: 'h6',
    },
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    as: 'p',

    tokens: {
      size: 'paragraph',
    },
  },
}

export const Leading = {
  render: Template.bind({}),
  name: 'Leading',

  args: {
    as: 'strong',

    tokens: {
      size: 'leading',
    },
  },
}

export const Footnotes = {
  render: Template.bind({}),
  name: 'Footnotes',

  args: {
    as: 'p',

    tokens: {
      size: 'footnote',
    },
  },
}

export const XSmall = {
  render: Template.bind({}),
  name: 'XSmall',

  args: {
    as: 'p',

    tokens: {
      size: 'xs',
    },
  },
}
