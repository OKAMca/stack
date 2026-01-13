import { Box } from '@okam/stack-ui'
import { Suspense } from 'react'
import FruitFilter from './components/ColorFilter'

export default async function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box>
        <FruitFilter />
      </Box>
    </Suspense>
  )
}
