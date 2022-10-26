import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
 const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blog</Link>
            <Link to='/users'>Users</Link>
        </nav>
    </div>
  )
}

export default Navbar
