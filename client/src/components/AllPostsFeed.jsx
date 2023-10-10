import { Box,Grid,Stack, Typography } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'

const AllPostsFeed = () => {
  return (
    <Box bgcolor={""} flex={4} padding={3}>

        <Typography 
            variant="h4" 
            sx={{display:{xs:"none",sm:"block"}, padding:"20px", color:'primary.main'}}
            textAlign={'center'}
        >
            <b>All Posts</b>
        </Typography>

        <Box sx={{ flexGrow: 1 }} paddingTop={4}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* The number (here, 8) represents the number of cards displayed */}
                {Array.from(Array(8)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index} padding={1}>
                    <MediaCard/>
                </Grid>
                ))}
                
            </Grid>

        </Box>
    </Box>
  )
}

export default AllPostsFeed