import React from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack } from '@mui/material'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default function App() {
  return (
    <Box sx={{backgroundColor:"mistyrose", /*overflow:'hidden'*/}}>
      <Navbar/>
      {/*navbar*/}
      <Stack direction="row" spacing={{xs:'none', sm:2}} justifyContent={"space-between"}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <SignIn/>
      <SignUp/>
    </Box>
  )
}
