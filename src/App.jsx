import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet/>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
