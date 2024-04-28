import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios 
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Applications from './components/applications/applications';
import Profile from './components/profile/profile';
import Logout from './components/logout/Logout';
import Register from './components/register/register';
import Application from './components/application/Application';
import ProfileUpdate from './components/profile/ProfileUpdate';
import Applypage from './components/home/applypage';

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/');  // Replace with your backend URL
        const parsedJson = JSON.parse(response.data.data);
        console.log(parsedJson); // Log the data to the console
        setJobs(parsedJson);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async (username,password) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });
      console.log('Post created successfully');
      if (response.data.status !== 200) {
        console.log('login failed');
        return false;
      }
      else{
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        return true;
      }
    } catch (error) {
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home jobs={jobs}/>} />
      <Route path="/applications" element={<Applications />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login onLogin={handleLogin}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/application/:id" element={<Application />} />
      <Route path="/profileupdate" element={<ProfileUpdate />} />
      <Route path="/applypage" element={<Applypage />} />

        
    </Routes>
  );
}

export default App;
