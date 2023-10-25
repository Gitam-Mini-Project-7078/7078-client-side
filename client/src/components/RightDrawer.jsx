import React from 'react';
import { Box, Button, Divider, Drawer, Grid, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography, styled } from '@mui/material';
import { CloudUpload, Inbox, Mail, Padding } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils'


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

const RightDrawer = (props) => {

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        sx: {
          width: '600px',
        },
      }}
    >
      <List>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListItemText primary="Solution Title" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListItemText primary="Solution Description" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Button component="label" variant="contained" startIcon={<CloudUpload />} sx={{minWidth:'400px', alignSelf:'center'}}>
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>

      <Divider sx={{paddingTop:1, paddingBottom: 2 }}/>

      <Button variant="contained" color="primary" onClick={props.onClose} sx={{maxWidth:'200px', alignSelf:'center'}}>
            Save
      </Button>

    </Drawer>
  );
};

export default RightDrawer;
