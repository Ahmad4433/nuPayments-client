import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Hero from './components/other/hero/Hero'
import Layout from './components/layout/Layout'
const App = () => {
  return (
   <Routes>
    <Route element={<Layout/>} >

    <Route path='/' element={<Hero/>}/>



    
    </Route>
   
   </Routes>
  )
}

export default App
