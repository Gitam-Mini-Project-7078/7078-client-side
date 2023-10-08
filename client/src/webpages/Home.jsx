import { Box, Stack } from '@mui/material'
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
    </Box>

  )
}

