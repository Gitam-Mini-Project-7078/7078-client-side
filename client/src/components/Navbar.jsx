import { Bookmark, Group, Logout, Notifications, QuestionMark, Search, Settings} from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Divider, InputBase, Link, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'

import { Link as RouterLink, useNavigate } from 'react-router-dom';


const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Navbar = () => {

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null); //For User Menu to pop up
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (event.currentTarget.id==='logo') {
      let path = '/'
      navigate(path) 
    }

    if (event.currentTarget.id==='avatar-button') {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>

        <Tooltip title="Go Home">
        <StyledToolBar id='logo' onClick={handleClick}>
        <Group sx={{display:{xs:"block", sm:"block"}}}/>
        <Typography 
          variant="h6" 
          sx={{display:{xs:"none",sm:"block"}, padding:"10px"}}
          >
            <b>Team ID 7078</b>
        </Typography>
        </StyledToolBar>
        </Tooltip>

        {/* Start of Search Bar */}
        <div style={{backgroundColor:"salmon", borderRadius:"50px", width:"40%", height:"50px"}}>
          <StyledToolBar sx={{justifyContent:"start"}}>
            <Search sx={{padding:"10px", paddingBottom:"20px"}}/>
            <InputBase placeholder='Search' sx={{paddingBottom:"10px", width:"90%", color:"white"}}/>
          </StyledToolBar>
        </div>
        {/* End of Search Bar */}


        <Box sx={{display:"flex", gap:{xs:"15px",sm:"20px"}, alignItems:"center"}}>
          <Typography
            variant="h7" 
            sx={{display:{xs:"none", sm:"block"}}}
            >
              <Link
                component={RouterLink} 
                variant='body1' 
                color='secondary.main' 
                to='/about' 
                underline="none"
                >
                  About
              </Link>
          </Typography>

          <QuestionMark sx={{display:{xs:"block", sm:"none"}}}/>
          
          <Badge badgeContent={2} color='error'>
            <Notifications/>
          </Badge>

          <Tooltip title="Account settings">
            <Avatar id='avatar-button' sx={{bgcolor:"red"}} onClick={handleClick}>JD</Avatar>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}

            /* The sole purpose of the code below is to make the "My Profile" button in the Menu look pretty */
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            /* The "My Profile" beautification code ends */

            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> My Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Bookmark fontSize="small" />
              </ListItemIcon>
              Bookmarks
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>

      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar