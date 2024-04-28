import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Applications from './components/applications/applications';
import Profile from './components/profile/profile';
import Logout from './components/logout/Logout';
import Register from './components/register/register';
import Application from './components/application/Application';
function App() {
  console.log("logged in: " + localStorage.getItem('isLoggedIn'));
  const [data, setData] = useState(null);  // State to store response data
  const [isLoggedIn, setLogin] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/');  // Replace with your backend URL
        setData(response.data.number);  // Acc  ess correct property from response data
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
      console.log("trying")
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });
      console.log('Post created successfully');
      if (response.data.status != 200) {
        console.log('login failed');
        return false;
      }
      else{
        console.log(response);  
        console.log('login successfull');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        console.log("user: " + localStorage.getItem('username'));
        return true;
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };



  return (
    <Routes>
      <Route path="/" element={<Home jobs={jobs}/>} />
      <Route path="/applications" element={<Applications />}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/application/:id" element={<Application />} />

        
    </Routes>
  );
}

export default App;
