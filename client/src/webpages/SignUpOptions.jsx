import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Card, CardActionArea, CardContent, CardMedia, Stack } from '@mui/material';

import { Link as RouterLink, useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="primary.main" component={RouterLink} to='/' >
        Team 7078
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUpOptions() {

  let navigate = useNavigate();
  const handleCardClick = event => {
    if (event.currentTarget.id ==='provider') {
      let path = '/signup-provider'
      navigate(path)
    }
    if (event.currentTarget.id ==='poster'){
      let path = '/signup-poster'
      navigate(path)
    }
  }

  return (
      <Container component="main" maxWidth="sm" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>


          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={"space-between"} sx={{marginTop: 5}}>

            {/* Start of Provider Card */}
            <Card onClick={handleCardClick} sx={{maxWidth:345, minWidth:300}} id='provider'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={require('../images/provider.png')} //doesnt work without 'require'
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" noWrap>
                    Solution Provider
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paddingBottom={1}>
                    You will be able to Upload Solutions to Problems
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* End of Provider Card */}


            {/* Start of Poster Card */}
            <Card onClick={handleCardClick} sx={{maxWidth:345, minWidth:300}} id='poster'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="170"
                  image={require('../images/poster.png')} //doesnt work without 'require'
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" noWrap>
                    Problem Poster
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paddingBottom={1}>
                    You will be able to Post Problems on our Website
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* End of Poster Card */}

          </Stack>

        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}