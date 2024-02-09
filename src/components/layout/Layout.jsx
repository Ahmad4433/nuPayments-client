import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header/Header'
import style from './layout.module.css'
import Footer from './footer/Footer'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
