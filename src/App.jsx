import React, { useEffect } from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import Hero from './components/other/hero/Hero'
import Layout from './components/layout/Layout'

const App = () => {
const navigate = useNavigate()
  useEffect(()=>{
navigate('/client')

  },[navigate])

  return (
   <Routes>
    <Route element={<Layout/>} >

    <Route path='/client' element={<Hero/>}/>



    
    </Route>
   
   </Routes>
  )
}

export default App
