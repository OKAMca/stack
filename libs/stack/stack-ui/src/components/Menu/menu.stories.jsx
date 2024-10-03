import MenuContent from '../../storybook/Menu/Menu'
import NestedMenuContent from '../../storybook/Menu/NestedMenu'

const Template = () => <MenuContent />
const TemplateNested = () => <NestedMenuContent />

export default {
  title: 'Layout/Menu',
  component: MenuContent,
}

export const Menu = {
  render: Template.bind({}),
}

export const NestedMenu = {
  render: TemplateNested.bind({}),
}
