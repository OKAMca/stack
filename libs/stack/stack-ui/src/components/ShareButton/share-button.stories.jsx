import ShareButtonExample from '../../storybook/ShareButtonExample'

const Template = (args) => <ShareButtonExample {...args} />

export default {
  title: 'Base Components/Share Button',
  component: ShareButtonExample,
  onShare: () => console.log('shared'),
}

export const ColumnShareButton = {
  render: Template.bind({}),
  name: 'Column Share Button',

  args: {
    tokens: {
      listDirection: 'column',
    },
  },
}

export const RowShareButton = {
  render: Template.bind({}),
  name: 'Row Share Button',

  args: {
    tokens: {
      listDirection: 'row',
    },
  },
}
