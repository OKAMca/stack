import type TMenuProps from '../interface'
import { useMenu } from '../../../providers/Menu'
import { Box } from '../../Box'
import TabContainer from './TabContainer'

function InnerContent(props: TMenuProps) {
  const { themeName, tokens, customTheme, children, beforeTabContent, afterTabContent } = props
  const { tabState, defaultSelectedKey } = useMenu()
  return (
    <>
      <Box themeName={`${themeName}.wrapper`} tokens={tokens} customTheme={customTheme}>
        {children}
      </Box>

      {tabState?.selectedKey?.toString() === defaultSelectedKey
        ? null
        : (
            <Box themeName={`${themeName}.tabWrapper`} tokens={tokens} customTheme={customTheme}>
              {beforeTabContent !== null && beforeTabContent}
              <TabContainer themeName={`${themeName}.tabPanel`} tokens={tokens} customTheme={customTheme} />
              {afterTabContent !== null && afterTabContent}
            </Box>
          )}
    </>
  )
}

export default InnerContent
