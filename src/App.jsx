import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes,Navigate  } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cont' element={<Contact/>}/>
         <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
