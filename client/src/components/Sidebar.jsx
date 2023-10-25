import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor={""} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
      Sidebar<br/>

    </Box>
  )
}

export default Sidebar