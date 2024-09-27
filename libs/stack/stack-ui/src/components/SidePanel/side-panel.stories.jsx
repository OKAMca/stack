import { SidePanelContextProvider, useSidePanel } from '../../providers/SidePanel'
import { ButtonWithForwardRef } from '../Button'
import SidePanel from '.'

const SidePanelControl = () => {
  const { buttonProps } = useSidePanel()
  if (buttonProps == null) {
    return null
  }
  return (
    <ButtonWithForwardRef variant="black" {...buttonProps?.openButtonProps} ref={buttonProps?.openButtonRef}>
      Open
    </ButtonWithForwardRef>
  )
}

const Template = (args) => (
  <SidePanelContextProvider
    onOpenCallback={() => console.log('Side panel is now opened!')}
    onCloseCallback={() => console.log('Side panel is now closed!')}
  >
    <SidePanelControl />
    <SidePanel {...args}>
      <div>Hello world!</div>
    </SidePanel>
  </SidePanelContextProvider>
)

export default {
  title: 'BASE COMPONENTS/Side Panel',
  component: SidePanel,
  args: {},
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
}
