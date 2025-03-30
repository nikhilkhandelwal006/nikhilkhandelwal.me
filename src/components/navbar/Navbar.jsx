import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="left"><a href="#" >Nikhil Khandelwal</a></div>
        <div className="right">
          <ul className="right-1">
            <li  ><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li>Books</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
