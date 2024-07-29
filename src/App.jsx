import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signin from './AuthPage/Signin'
import Signup from './AuthPage/Signup'
import Layout from './layouts/Layout'
import Userdesh from './Userdesh'
import AboutUS from './AboutUS'
import ContactUs from './ContactUs'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/userpage' element={<Userdesh />} />
          <Route path='/aboutus' element={<AboutUS />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
