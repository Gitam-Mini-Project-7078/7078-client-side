import { CorporateFare, People } from '@mui/icons-material'
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, List, ListItem, ListItemIcon, ListItemText,OutlinedInput, Switch, Typography } from '@mui/material'
import React from 'react'

const Sidebar = () => {

  const subjectsList = ['Computer Science', 'Electrical Engineering', 'Civil Engineering', 'Medicine', 'Biology', 'Botany', 'Psychology', 'Social Sciences', 'Pharma','Economics'];

  return (
    <Box bgcolor={""} flex={1} padding={2} sx={{display:{xs: "none", sm:"block"}}}>

      <Typography 
          variant="h6" 
          sx={{display:{xs:"none",sm:"block"}, padding:"5px", color:'primary.main'}}
          textAlign={'left'}
      >
          <b>Filters</b>
      </Typography>

      <Divider/>

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText id="switch-list-label-govt" primary="Govt. Posts" />
            <Switch
              edge="end"
              // onChange={handleToggle('wifi')}
              // checked={checked.indexOf('wifi') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-wifi',
              // }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CorporateFare />
            </ListItemIcon>
            <ListItemText id="switch-list-label-bluetooth" primary="Pvt. Posts" />
            <Switch
              edge="end"
              // onChange={handleToggle('bluetooth')}
              // checked={checked.indexOf('bluetooth') !== -1}
              // inputProps={{
              //   'aria-labelledby': 'switch-list-label-bluetooth',
              // }}
            />
          </ListItem>
        </List>

      <Divider/>

      <Typography 
          variant="h7" 
          sx={{display:{xs:"none",sm:"block"}, padding:"5px", color:'grey', paddingTop:2}}
          textAlign={'left'}
      >
          Subject Fields
      </Typography>

      <FormGroup>
        {subjectsList.map((text) => (
          < FormControlLabel control={<Checkbox defaultChecked size="small"/>} label = {text} />
        ))}
      </FormGroup>

      <Divider/>

      <Typography 
          variant="h7" 
          sx={{display:{xs:"none",sm:"block"}, padding:"5px", color:'grey', paddingTop:2}}
          textAlign={'left'}
      >
          Reward Range
      </Typography>

      <FormControl fullWidth sx={{ m: 1, width: '25ch'}} size='small'>
          <InputLabel htmlFor="outlined-adornment-amount">Minimum</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="minAmount"
          />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1, width: '25ch'}} size='small'>
          <InputLabel htmlFor="outlined-adornment-amount">Maximum</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="maxAmount"
          />
      </FormControl>

      <Divider sx={{paddingBottom:2}}/>

      <Box textAlign={'center'} paddingTop={2}>
        <Button variant="contained" color="primary" size='small'>
              Apply
        </Button>
      </Box>


    </Box>
  )
}

export default Sidebar