import React, { useEffect, useState } from 'react';
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
      <header>
        <h1>Welcome {localStorage.getItem('username')}!</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/applications">My Applications</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout" className="logout-button">Logout</a></li>
            </ul>
        </nav>
      </header>
  );
}

export default Header;
