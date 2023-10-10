import { Box,Button,Grid,Typography } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import { useNavigate } from 'react-router-dom';

const BookmarksFeed = () => {

    let navigate = useNavigate();

    const handleOnClick = (event) => {
      let path = '/all'
      navigate(path)
  
    };

  return (
    <Box bgcolor={""} flex={4} padding={3}>

        <Typography 
            variant="h4" 
            sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'primary.main'}}
            textAlign={'center'}
        >
            <b>Bookmarked Posts</b>
        </Typography>

        <Box sx={{ flexGrow: 1 }} paddingTop={4}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* The number (here, 5) represents the number of cards displayed */}
                {Array.from(Array(5)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index} padding={1}>
                    <MediaCard/>
                </Grid>
                ))}
                
            </Grid>

        </Box>

        <Box textAlign='center' padding={5}>
            <Button variant="contained" sx={{bgcolor:'primary.main'}} size='large' onClick={handleOnClick}>
            View All Posts
            </Button>
        </Box>

    </Box>
  )
}

export default BookmarksFeed