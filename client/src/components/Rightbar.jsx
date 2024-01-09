import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    //<Box sx={{backgroundColor:"floralwhite"}}>
    <Box bgcolor={""} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>{/* Made use of breakpoints*/}
      Rightbar<br/>
      Ad Space / GITAM Articles / Updates 
    </Box>
  )
}

export default Rightbar