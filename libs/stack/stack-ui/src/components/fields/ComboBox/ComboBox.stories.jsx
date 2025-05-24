import { OverlayContainer } from '@react-aria/overlays'
import ComboBox from './ComboBox'

const Template = (args) => (
  <OverlayContainer style={{ width: '100%' }}>
    <ComboBox {...args} />
  </OverlayContainer>
)

export default {
  title: 'Form/Fields/ComboBox',
  component: ComboBox,
  args: {
    placeholder: 'This is the placeholder',
    label: 'This is the listbox label',
    orientation: 'left',
    allowsCustomValue: true,
    menuTrigger: 'focus',
    items: [
      { post_title: 'CTV', ID: '1' },
      { post_title: 'TSN', ID: '2' },
      { post_title: 'Crave', ID: '3' },
      { post_title: 'CTV Comedy', ID: '4' },
      { post_title: 'CTV Sci-fi', ID: '5' },
      { post_title: 'CTV Drama', ID: '6' },
      { post_title: 'CTV News', ID: '7' },
    ],
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}
