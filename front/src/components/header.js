import React from 'react';
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
              <a href="/applications" className="nav-link">
                My Applications
              </a>
              <p className="jobs-applied"># of jobs applied: 3</p>
              <p className="applications-left"># of applications left: 5</p>
            <p className="refresh-time">Refreshing in: 5 days</p>
            </nav>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/062ea4dec4c9f51c6ffcfa64fba8324719b720cdbf30baa491508c37d51bcc35?apiKey=c7598dd2036b4baf9e49409c4a6781c6&" alt="User avatar" className="user-avatar" />
          </div>
    </div>
  );
}

export default Header;
