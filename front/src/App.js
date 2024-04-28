import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import logo from './logo.svg';
>>>>>>> cc712b1a5ef4074a4d52ceaea1dce688f59930ee
import './App.css';
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
function App() {
<<<<<<< HEAD
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
        password
      });
      console.log('Post created successfully');
      if (response.data.status !== 200) {
        console.log('login failed');
        return false;
      }
      else{
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        // logic to ensure isCompany is true/false
        localStorage.setItem('isCompany', response.data.isCompany);
        console.log("Is company: " + localStorage.getItem("isCompany"))
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

        
    </Routes>
=======
  const [data, setData] = useState(null);  // State to store response data

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> cc712b1a5ef4074a4d52ceaea1dce688f59930ee
  );
}

export default App;
