import { Main, SkipToMain } from '.'
import { Box, Typography } from '../..'

function Template(args) {
  return (
    <>
      <SkipToMain {...args} />
      <Main id="main">
        <Box themeName="container">
          <Typography as="p">Tab to see the skip link appear</Typography>
          <Typography as="h1" tokens={{ size: 'h1' }}>
            Main Content
          </Typography>
          <Typography as="p">This is the main content area.</Typography>
        </Box>
      </Main>
    </>
  )
}

export default {
  title: 'BASE COMPONENTS/SkipToMain',
  component: SkipToMain,
  args: {
    children: 'Skip to main content',
    ariaLabel: 'Skip to main content',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  render: Template.bind({}),
  name: 'Default',
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
}
