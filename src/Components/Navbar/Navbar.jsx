import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Avi-Logo" />
      
      {!menuOpen && (
        <RiMenu3Line onClick={openMenu} className='nav-mob-open' />
      )}
      
      <div ref={menuRef} className='nav-menus'>
        <IoClose onClick={closeMenu} className="nav-mob-close" />
        
        <AnchorLink className='anchor_link' href='#home'>
          <NavLink to='/' onClick={closeMenu} className='nav-menu'>Home</NavLink>
        </AnchorLink>

        <AnchorLink className='anchor_link' offset={50} href='#about'>
          <NavLink to='/about' onClick={closeMenu} className='nav-menu'>About Me</NavLink>
        </AnchorLink>

        <AnchorLink className='anchor_link' offset={50} href='#services'>
          <NavLink to='/services' onClick={closeMenu} className='nav-menu'>Services</NavLink>
        </AnchorLink>

        <AnchorLink className='anchor_link' offset={50} href='#project'>
          <NavLink to='/Project' onClick={closeMenu} className='nav-menu'>Project</NavLink>
        </AnchorLink>

        <AnchorLink className='anchor_link' offset={50} href='#contact'>
          <NavLink to='/contact' onClick={closeMenu} className='nav-menu'>Contact</NavLink>
        </AnchorLink>
      </div>

      <AnchorLink className='anchor_link' offset={50} href='#contact'>
        <NavLink to='/cont' className='nav-connect'>Connect With Me</NavLink>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
