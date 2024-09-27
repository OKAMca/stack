import Box from './index'

const Template = (args) => (
  <div className="bg-slate-200 p-4">
    <Box {...args}>Hello world!</Box>
  </div>
)

export default {
  title: 'BASE COMPONENTS/Box',
  component: Box,
}

export const BoxStory = {
  render: Template.bind({}),
  name: 'Box',

  args: {
    as: 'div',
  },
}
