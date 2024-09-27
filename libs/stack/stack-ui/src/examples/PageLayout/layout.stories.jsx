import PageLayoutExample from './index'

const Template = (args) => (
  <>
    <style>
      {`
        #storybook-root {
          width: 100%;
          padding: 0! important;
        }
      `}
    </style>
    <PageLayoutExample {...args} />
  </>
)

export default {
  title: 'LAYOUT EXAMPLE/Simple',
  component: PageLayoutExample,
}

export const Box = {
  render: Template.bind({}),
  name: 'Box',

  args: {
    as: 'div',
  },
}
