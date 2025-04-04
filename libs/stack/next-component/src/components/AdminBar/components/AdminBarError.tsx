'use client'

import { Box, Typography, type TDefaultComponent } from '@okam/stack-ui'
import { useAdminBar } from '../../../providers/AdminBar'

const AdminBarError = ({ themeName = 'adminBar', tokens, customTheme }: TDefaultComponent) => {
  const { error } = useAdminBar()

  if (!error) return null

  return (
    <Box themeName={`${themeName}.error`} tokens={tokens} customTheme={customTheme}>
      <Typography themeName={`${themeName}.errorTypography`} tokens={tokens} customTheme={customTheme}>
        {error.message}
      </Typography>
    </Box>
  )
}

export default AdminBarError
