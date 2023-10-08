import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor={"floralwhite"} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
      Sidebar<br/>
      Ad Space
    </Box>
  )
}

export default Sidebar