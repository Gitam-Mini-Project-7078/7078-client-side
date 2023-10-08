import React from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, Stack } from '@mui/material'
import SignIn from './webpages/SignIn'
import SignUp from './webpages/SignUp'
import Home from './webpages/Home'
import SignUpOptions from './webpages/SignUpOptions'

export default function App() {
  return (
    <Box sx={{backgroundColor:"", /*overflow:'hidden'*/}}>
      <SignUpOptions/>
    </Box>
  )
}
