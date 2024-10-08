import React, { useEffect, useState } from 'react'
import  './navbar.css'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  
  return (
    <div className='navbar-div'>
        <Link className={location.pathname==="/"?"selected":""} to="/">Home</Link>
        <Link className={location.pathname==="/analytics"?"selected":""} to="/analytics">Analytics</Link>
    </div>
  )
}

export default NavBar