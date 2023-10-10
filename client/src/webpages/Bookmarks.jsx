import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import BookmarksFeed from '../components/BookmarksFeed'

export default function Bookmarks() {
  return (
    <Box>

      <Navbar/>

      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
          <Sidebar/>
          <BookmarksFeed/>
          <Rightbar/>
      </Stack>
      
    </Box>
  )
}

