import React, { useEffect, useState } from 'react';
import "./header.css";
import logo from './logo.jpg';

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
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1>Welcome {localStorage.getItem('username')}!</h1>
      <nav>
        <ul>
          <li className={currentTab === "Home" ? "active" : ""}><a href="/">Home</a></li>
          <li className={currentTab === "My Applications" ? "active" : ""}><a href="/applications">My Applications</a></li>
          <li className={currentTab === "Profile" ? "active" : ""}><a href="/profile">Profile</a></li>
          <li><a href="/logout" className="logout-button">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
