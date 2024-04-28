import React, { useEffect, useState } from 'react';
import accountCircleImg from './accountcircle.png';
import "./header.css";

const Header = () => {
  const [currentTab, setCurrentTab] = useState(""); // State to keep track of current tab

  useEffect(() => {
    const pathname = window.location.pathname;
    // Mapping URLs to tab names
    const tabs = {
      "/": "Home",
      "/applications": "My Applications",
      "/profile": "Profile"
    };
    // Setting current tab based on URL
    setCurrentTab(tabs[pathname]);
  }, []);

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    if (tabName !== "Profile") {
      setCurrentTab(tabName);
    }
  };

  return (
    <div className='header'>
      <div className="header-content">
        <nav className="navigation">
          <a href="/" className={`nav-link ${currentTab === "Home" ? "active" : ""}`} onClick={() => handleTabClick("Home")}>
            Home
          </a>
          <a href="/applications" className={`nav-link ${currentTab === "My Applications" ? "active" : ""}`} onClick={() => handleTabClick("My Applications")}>
            My Applications
          </a>
          <a href="/profile" className={`nav-link ${currentTab === "Profile" ? "active" : ""}`} onClick={() => handleTabClick("Profile")}>
            <img src={accountCircleImg} alt="User avatar" className="user-avatar" />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
