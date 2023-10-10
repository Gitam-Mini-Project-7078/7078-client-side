import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate();

  const handleOnClick = (event) => {
    let path = '/all'
    navigate(path)

  };

  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
      </Stack>

      <Box textAlign='center' padding={5}>
        <Button variant="contained" sx={{bgcolor:'primary.main'}} size='large' onClick={handleOnClick}>
          View All Posts
        </Button>
      </Box>

    </Box>
  )
}

