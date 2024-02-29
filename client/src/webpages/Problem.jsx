import { Box, Card, CardMedia, Divider, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RightDrawer from '../components/RightDrawer';

import axios from 'axios';
import { useParams } from 'react-router-dom'


const Problem = () => {
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [problem, setProblem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:7078/problems/${id}`)
      .then((response) => {
        setProblem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (

    <Box>
      <Navbar/>
      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>

        <Box bgcolor={""} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
          Sidebar<br/>
          Ad Space/ Filters
        </Box>

        <Stack direction="column" spacing={{xs:'none', sm:2}} justifyContent={"space-between"} flex={4} padding={2}>
          <Box bgcolor={""} padding={2}>

            <Typography 
              variant="h4" 
              sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'primary.main'}}
              id = "problemTitle"
              // textAlign={'center'}
            >
              {/* <b>Problem Title</b> */}
              {problem.title}
            </Typography>
            <Divider/>

            <Stack direction={{xs:"column", sm:'row'}} spacing={1} justifyContent={'space-between'} bgcolor={''} padding={1}>

              <Card sx={{ width:345 }} flex={2}>
                <CardMedia
                  component="img"
                  image={require('../images/pnb.png')}
                  alt="problem image"
                  sx={{objectFit: "contain"}}
                />
              </Card>

              <Box sx={{border:'1px', borderRadius:'20px'}} flex={4} padding={0}>
                <Stack 
                  direction='column' 
                  spacing={1} 
                  justifyContent={'space-between'} 
                  bgcolor={''} 
                  padding={2} 
                  sx={{boxShadow: 1}}>

                  <Box paddingTop={0}>
                    <Typography 
                      variant="h7"
                      // textAlign={'center'}
                    >
                      <b>Closing On </b>
                    </Typography>
                    <Typography 
                      variant="h7"
                      // textAlign={'center'}
                    >
                      {/* *Insert Date* */}
                      {problem.closeDate}

                    </Typography>
                  </Box>

                  <Box paddingTop={2}>
                    <Typography 
                      variant="h7"
                      // textAlign={'center'}
                    >
                      <b>Reward </b>
                    </Typography>
                    <Typography 
                      variant="h7"
                      // textAlign={'center'}
                    >
                      {/* *Insert Amount* */}
                      {problem.reward}

                    </Typography>
                  </Box>

                  <Box paddingTop={2}>
                    <Stack direction='column' spacing={1} justifyContent={'space-between'} bgcolor={'secondary.main'} padding={0}>
                      <Typography 
                        variant="h7"
                        // textAlign={'center'}
                      >
                        <b>Short Description</b>
                      </Typography>
                      <Typography 
                        variant="h7"
                        lineHeight={1.5}
                        id = 'shortDescription'
                      >
                      {/* Lorem Ipsum Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text */}
                      {problem.shortDescription}

                      </Typography>
                    </Stack>
                  </Box>

                  <Divider/>

                  <Box alignContent={'center'} alignSelf={'center'}>
                  <Button onClick={openDrawer} component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{maxWidth:'180px'}} size='small' >
                    Submit Solution
                    {/* <VisuallyHiddenInput type="file" /> */}
                  </Button>
                  </Box>

                </Stack>
              </Box>

            </Stack>
          </Box>

          <RightDrawer open={isDrawerOpen} onClose={closeDrawer} />

          <Box bgcolor={""} padding={2} id=''>
            <Box paddingTop={2}>
              <Stack direction='column' spacing={1} justifyContent={'space-between'} bgcolor={'secondary.main'} padding={0}>
                <Typography 
                  variant="h7"
                  // textAlign={'center'}
                >
                  <b>Detailed Description</b>
                </Typography>
                <Typography 
                  variant="h7"
                  lineHeight={1.5}
                  id = 'longDescription'
                >
                {/* Lorem Ipsum Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text */}
                {problem.detailedDescription}

                </Typography>
              </Stack>
              
            </Box>
            
          </Box>

        </Stack>

        <Box bgcolor={""} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>
          Rightbar<br/>
          Ad Space
        </Box>

      </Stack>
    </Box>


  )
}

export default Problem