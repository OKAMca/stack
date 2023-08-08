import { Typography } from '@okam/stack-ui'

export default async function Index() {
  return (
    <div>
      <Typography tokens={{ size: 'h1', className: 'block' }}>Heading 1</Typography>
      <Typography tokens={{ size: 'h2', className: 'block' }}>Heading 2</Typography>
      <Typography tokens={{ size: 'h3', className: 'block' }}>Heading 3</Typography>
      <Typography tokens={{ size: 'h4', className: 'block' }}>Heading 4</Typography>
      <Typography tokens={{ size: 'h5', className: 'block' }}>Heading 5</Typography>
      <Typography tokens={{ size: 'h6', className: 'block' }}>Heading 6</Typography>
      <Typography tokens={{ size: 'leading', className: 'block' }}>Leading</Typography>
      <Typography tokens={{ size: 'paragraph', className: 'block' }}>Paragraph</Typography>
      <Typography tokens={{ size: 'footnotes', className: 'block' }}>Footnotes</Typography>
      <Typography tokens={{ size: 'xs', className: 'block' }}>XS</Typography>
    </div>
  )
}
