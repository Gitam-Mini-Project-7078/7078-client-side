import React from 'react';
import { Typography,Box, Stack, Avatar } from '@mui/material';

const ProfilePage = () => {
  return (
    <Box padding={20} m='auto'>
      <Stack direction={'row'} spacing={1} justifyContent={'space-between'} bgcolor={''}>


        <Box flex={1} padding={2} >
        <Stack direction='column' spacing={1} justifyContent={'space-between'} bgcolor={'secondary.main'} padding={0}>
          <Typography 
            variant="h7"
            color={'primary.main'}
          >
            <b>Email</b>
          </Typography>
          <Typography 
            variant="h7"
            lineHeight={1.5}
            id = 'email'
          >
            sample.email@gmail.com
          </Typography>
        </Stack>

        <Stack direction='column' spacing={1} justifyContent={'space-between'} bgcolor={'secondary.main'} paddingTop={5}>
          <Typography 
            variant="h7"
            color={'primary.main'}
          >
            <b>User Role</b>
          </Typography>
          <Typography 
            variant="h7"
            lineHeight={1.5}
            id = 'role'
          >
            Role
          </Typography>
        </Stack>
        </Box>



        <Box flex={1} padding={2}>
          <Avatar
          alt="John Doe"
          sx={{ width: 100, height: 100 }}
          m='auto'
          >JD </Avatar>
        </Box>
        

      </Stack>
    </Box>
  );
};

export default ProfilePage;
