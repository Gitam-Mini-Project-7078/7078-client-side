import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
      </Stack>
      <Box textAlign='center' padding={5}>
        <Button variant="contained" sx={{bgcolor:'primary.main'}} size='large'>
          View All Posts
        </Button>
      </Box>
    </Box>
  )
}

