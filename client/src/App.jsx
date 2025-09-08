import React from 'react'
import Sidebar from './Components/SIdebar'
import { Route, Routes } from 'react-router-dom'
import ChatBox from './Components/ChatBox'
import Credits from './Pages/Credits'
import Community from './Pages/Community'
import  { useState } from 'react';
import { assets } from './assets/assets'; 
import './assets/prism.css'

const App = () => {


const [isMenuOpen, setMenuOpen] = useState(false)

return (
  <>
    {!isMenuOpen && (
  <img
    src={assets.menu_icon}
    className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert'
    onClick={() => setMenuOpen(true)}
    alt="Open menu"
  />
)}


    <div className='bg-white dark:bg-black dark:text-white' >

      <div className='flex h-screen w-screen'>
        <Sidebar isMenuOpen={isMenuOpen}
         setMenuOpen={setMenuOpen}></Sidebar>
        <Routes>
          <Route path='/' element={<ChatBox/>} />
          <Route path='/credit' element={<Credits/>} />
          <Route path='/community' element={<Community/>} />
        </Routes>
      </div>
    </div>
      
    </>
  )
}

export default App