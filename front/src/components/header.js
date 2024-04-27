import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <h2>
        <a href='/'>Home</a> <a href='/login'>Login</a> <a href='/applications'>My Applications</a> <a href='/profile'>My Profile</a>
      </h2>
    </div>
  )
}

export default Header;