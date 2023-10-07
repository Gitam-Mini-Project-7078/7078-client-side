import { Box,Stack, Typography } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import { CorporateFare, People } from '@mui/icons-material'

const Feed = () => {
  return (
    //<Box sx={{backgroundColor:"chartreuse"}}> can also be used
    <Box bgcolor={""} flex={4} padding={2}>
    {/*<Box bgcolor={"chartreuse"} flex={4} padding={2}> */}
      <Typography 
        variant="h4" 
        sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'primary.main'}}
        textAlign={'center'}
      >
        <b>Top listings today</b>
      </Typography>
      
      <div id='GOVT'>
      <Typography
        variant="h6"
        padding={1}
      >
          <Box sx={{display:"flex", gap:"10px", alignItems:"center", color:'primary.main'}}><People/><b>GOVERNMENT</b></Box>
      </Typography>

      <Stack direction="row" spacing={2} justifyContent={"space-between"} > 
      <MediaCard/><MediaCard/><MediaCard/> 
      </Stack>
      </div>

      <Box id='PRIV' sx={{paddingTop:'30px'}}>
      <Typography
        variant="h6"
        padding={1}
      >
          <Box sx={{display:"flex", gap:"10px", alignItems:"center", color:'primary.main'}}><CorporateFare/><b>PRIVATE</b></Box>
      </Typography>

      <Stack direction="row" spacing={2} justifyContent={"space-between"}> 
      <MediaCard/><MediaCard/><MediaCard/> 
      </Stack>
      </Box>
    </Box>
  )
}

export default Feed