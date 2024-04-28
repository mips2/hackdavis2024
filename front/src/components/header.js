import React from 'react';
import accountCircleImg from './accountcircle.png';
import "./header.css";


const Header = () => {
  console.log(localStorage.getItem('isLoggedIn'));
    return (
    <div className='header'>
      <div className="header-content">
        <nav className="navigation">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/applications" className="nav-link2">
            My Applications
          </a>
            <p className="jobs-applied"># of jobs applied: 3</p>
            <p className="applications-left"># of applications left: 5</p>
            <p className="refresh-time">Refreshing in: 5 days</p>

          <a href="/profile" className="nav-link">
          <img src={accountCircleImg} alt="User avatar" className="user-avatar" />
          </a>
        </nav>
    </div>
  </div>
  );
}

export default Header;
