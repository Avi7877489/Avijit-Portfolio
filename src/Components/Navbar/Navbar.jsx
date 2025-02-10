import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { Link,NavLink } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const menuRef = useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="Avi-Logo" />
      <RiMenu3Line onClick={openMenu} className='nav-mob-open'/>
      <div ref={menuRef} className='nav-menus'>
        <IoClose onClick={closeMenu}  className="nav-mob-close" />
        <NavLink to='/' onClick={closeMenu} className='nav-menu'>Home</NavLink>
        <NavLink to='/about' onClick={closeMenu} className='nav-menu'>About Me</NavLink>
        <NavLink to='/services' onClick={closeMenu} className='nav-menu'>Services</NavLink>
        <NavLink to='/Project' onClick={closeMenu} className='nav-menu'>Project</NavLink>
        <NavLink to='/contact' onClick={closeMenu} className='nav-menu'>Contact</NavLink>
      </div>
      <NavLink to='/cont' className='nav-connect'>Connect With Me</NavLink>
    </div>
  )
}

export default Navbar
