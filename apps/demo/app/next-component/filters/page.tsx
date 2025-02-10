import { Typography } from '@okam/stack-ui'
import ColorFilter from './components/ColorFilter'
import ControlledShapeFilter from './components/ControlledShapeFilter'

export default async function Page() {
  return (
    <div>
      <Typography>Color filter</Typography>
      <ColorFilter />
      <Typography>Controlled shape filter</Typography>
      <ControlledShapeFilter />
    </div>
  )
}
