import Box from '../../components/Box'
import type { TBoxProps } from '../../components/Box/interface'
import Typography from '../../components/Typography'

const Main = ({ children }: TBoxProps) => {
  return (
    <Box as="main" themeName="main">
      {children}
    </Box>
  )
}

const Container = ({ children, ...props }: TBoxProps) => {
  return (
    <Box themeName="container" {...props}>
      {children}
    </Box>
  )
}

const Grid = ({ children, ...props }: TBoxProps) => {
  return (
    <Box themeName="grid" {...props}>
      {children}
    </Box>
  )
}

const GridItem = ({ children, ...props }: TBoxProps) => {
  return (
    <Box as="li" themeName="gridItem" {...props}>
      {children}
    </Box>
  )
}

const PageLayoutExample = () => (
  <Main>
    <Container tokens={{ spacing: 'small' }}>
      <Typography as="h1" tokens={{ size: 'h1', align: 'center' }}>
        Hello world
      </Typography>
    </Container>
    <Container tokens={{ spacing: 'large' }}>
      <Grid as="ul">
        <GridItem tokens={{ size: 'medium' }}>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
      </Grid>
    </Container>
    <Container tokens={{ fullWidth: true, className: 'bg-red-200 py-8' }}>
      <Grid as="ul">
        <GridItem tokens={{ size: 'large', className: 'h-96' }}>Large</GridItem>
      </Grid>
    </Container>
  </Main>
)

export default PageLayoutExample
