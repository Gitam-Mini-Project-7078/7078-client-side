import React from 'react'
import { Box} from '@mui/material'
import SignIn from './webpages/SignIn'
import SignUpProvider from './webpages/SignUpProvider'
import SignUpPoster from './webpages/SignUpPoster'
import Home from './webpages/Home'
import SignUpOptions from './webpages/SignUpOptions'
import { Routes, Route } from 'react-router-dom'
import Error from './webpages/Error'
import About from './webpages/About'
import Problem from './webpages/Problem'
import AllPosts from './webpages/AllPosts'
import Bookmarks from './webpages/Bookmarks'

export default function App() {
  return (
    <Box sx={{backgroundColor:"", /*overflow:'hidden'*/}}>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/all' element={<AllPosts/>}/>
        <Route path='/about' element={ <About/> } />
        <Route path='/signin' element={ <SignIn/> } />
        <Route path='/signup-options' element={ <SignUpOptions/> } />
        <Route path='/signup-provider' element={ <SignUpProvider/> } />
        <Route path='/signup-poster' element={ <SignUpPoster/> } />
        <Route path='/problem' element={ <Problem/> } />
        <Route path='/bookmarks' element={<Bookmarks/>}/>

        <Route path='/error' element={ <Error/> } />
      </Routes>
    </Box>
  )
}
