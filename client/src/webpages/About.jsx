import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Stack, Typography } from '@mui/material'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

import { Link, Link as RouterLink } from 'react-router-dom';


function Feedback(props){
  return(
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Please give us feeback by clicking '}
      <Link color="red" component={RouterLink} to='https://docs.google.com/forms/d/1yuloB_Kys6UbdL4oZEvhPUEIeATAeOe0gxXlCH1UPFo' >
        here.
      </Link>{' '}
    </Typography>
  );
}

export default function About() {
  return (
    <Box>
      <Navbar/>

      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
        <Rightbar/>

          <Box bgcolor={""} flex={4} padding={3}>

            <Typography 
                variant="h4" 
                sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'primary.main'}}
                textAlign={'center'}
            >
                <b>About Us</b>
            </Typography>

            <Typography 
                variant="h5" 
                sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'grey'}}
                textAlign={'left'}
            >
                <b>
                  Team 7078 is passionate about bringing the right people together to solve the problems of the world.
                  <br/><br/>
                  Our platform provides a space where public and private companies can post their most important problems for the community to provide solutions.
                  <br/><br/>
                </b>
            </Typography> 

            <Feedback/>          

          </Box>

        <Rightbar/>
      </Stack>
    </Box>
  )
}