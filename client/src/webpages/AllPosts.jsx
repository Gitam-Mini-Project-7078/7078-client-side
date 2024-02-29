import { Box, Stack } from '@mui/material'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import AllPostsFeed from '../components/AllPostsFeed'
import axios from 'axios'

const AllPosts = () => {
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
          <AllPostsFeed problems={problems}/>
          <Rightbar/>
      </Stack>
      
    </Box>
  )
}

export default AllPosts