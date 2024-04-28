import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  console.log(localStorage.getItem('isLoggedIn'));
  return (
    <div className='header'>
      <h2>
        <Link to='/'>Home</Link>
        {!localStorage.getItem('isLoggedIn')===true && <Link to='/login'>Login</Link>}
        {localStorage.getItem('isLoggedIn') && <Link to='/logout'>Logout</Link>}
        {localStorage.getItem('isLoggedIn') && <Link to='/applications'>My Applications</Link>}
        {localStorage.getItem('isLoggedIn') && <Link to='/profile'>My Profile</Link>}
      </h2>
    </div>
  );
}

export default Header;
