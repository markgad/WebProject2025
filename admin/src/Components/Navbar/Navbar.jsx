import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/profilepic.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p>Markos Store Admin Panel</p>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
