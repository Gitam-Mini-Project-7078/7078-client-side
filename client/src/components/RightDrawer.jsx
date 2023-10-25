import React from 'react';
import { Box, Button, Drawer, Grid, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { CloudUpload, Inbox, Mail } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils'

const RightDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={props.onClose}
      PaperProps={{
        sx: {
          width: '600px', // Adjust the width as needed
        },
      }}
    >
      <List>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <b>
              <ListItemText primary="Solution Title" />
              </b>
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
        <ListItem>
          <Button variant="contained" color="primary" onClick={props.onClose}>
            Save
          </Button>
        </ListItem>
        <ListItem>
            <Button component="label" variant="contained" startIcon={<CloudUpload />} sx={{maxWidth:'300px'}} size='small' >
                Submit Solution
                <Input sx={{ visuallyHidden }} type="file" />
            </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default RightDrawer;
