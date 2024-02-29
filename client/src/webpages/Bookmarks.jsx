import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import BookmarksFeed from '../components/BookmarksFeed'
import axios from 'axios'

export default function Bookmarks() {
  const [problems, setProblems] = useState([]);
  
  useEffect(() =>{
    axios
      .get('http://localhost:7078/problems')
      .then((response) => {
        setProblems(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <Box>

      <Navbar/>

      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
          <Sidebar/>
          <BookmarksFeed problems={problems} />
          <Rightbar/>
      </Stack>
      
    </Box>
  )
}

