import { Box,Grid, Typography } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'

const AllPostsFeed = ({ problems }) => {
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

            <Grid container spacing={{ xs: 2, am: 3, md: 3 }} columns={{ xs: 2, sm: 4, md: 6 }} justifyContent={"flex-start"}>

                {problems.map((item) => (
                    <Box sx={{padding: 0.5}}>
                        <MediaCard key={item._id} problem={item} />
                    </Box>
                ))}    
                
            </Grid>
        </Box>

    </Box>
  )
}

export default AllPostsFeed