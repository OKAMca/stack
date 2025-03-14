'use client'

import { useAdminBar } from '../../../providers/AdminBar'
import Box from '../../Box'
import Typography from '../../Typography'

const AdminBarError = () => {
  const { error } = useAdminBar()

  if (!error) return null

  return (
    <Box themeName="flex" tokens={{ fullWidth: true, align: 'center', justify: 'center', className: 'w-fit mx-0' }}>
      <Typography tokens={{ color: 'error', size: 'xs' }}>{error.message}</Typography>
    </Box>
  )
}

export default AdminBarError
