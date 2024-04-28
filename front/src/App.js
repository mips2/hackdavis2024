import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
function App() {
  console.log("logged in: " + localStorage.getItem('isLoggedIn'));
  const [data, setData] = useState(null);  // State to store response data
  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/');  // Replace with your backend URL
        setData(response.data.number);  // Access correct property from response data
        console.log('Data:', response.data); // Log the data to the console
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
        return true;
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/login" element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
        
    </Routes>
  );
}

export default App;
