import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests
import { Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './components/home/Home'; // Home component
import Login from './components/login/Login'; // Login component
import Applications from './components/applications/applications'; // Applications component
import Profile from './components/profile/profile'; // Profile component
import Logout from './components/logout/Logout'; // Logout component
import Register from './components/register/register'; // Register component
import Application from './components/application/Application'; // Single application component
import ProfileUpdate from './components/profile/ProfileUpdate'; // Profile update component
import Applypage from './components/home/applypage'; // Page to apply for jobs

function App() {
  // State to store job listings
  const [jobs, setJobs] = useState([]);

  // useEffect to fetch job data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Request job data from backend
        const response = await axios.get('http://127.0.0.1:5000/');
        // Parse the JSON data received from the server
        const parsedJson = JSON.parse(response.data.data);
        console.log(parsedJson); // Log the data to the console for debugging
        setJobs(parsedJson); // Update the state with the fetched jobs
      } catch (error) {
        console.error('Error:', error); // Log any errors that occur during the fetch operation
      }
    };

    fetchData(); // Call fetchData function to execute
  }, []);

  // Function to handle user login
  const handleLogin = async (username, password) => {
    try {
      // Post login credentials to backend
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password
      });

      console.log('Post created successfully'); // Log success message
      if (response.data.status !== 200) {
        console.log('login failed'); // Log login failure message
        return false;
      } else {
        // Store user information in local storage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('isCompany', response.data.isCompany); // Store user type
        console.log("Is company: " + localStorage.getItem("isCompany"));
        return true; // Return true on successful login
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors that occur during login
    }
  };

  return (
    // Define routes and components for each path
    <Routes>
      <Route path="/" element={<Home jobs={jobs} />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/application/:id" element={<Application />} />
      <Route path="/profileupdate" element={<ProfileUpdate />} />
      <Route path="/applypage" element={<Applypage />} />
    </Routes>
  );
}

export default App; // Export App component for use in other parts of the application
