import PrintButton from '.'

const Template = args => <PrintButton {...args} />

export default {
  title: 'Base Components/Print Button',
  component: PrintButton,
  args: {
    ariaLabel: 'Print',
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}
