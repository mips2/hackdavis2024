import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Applications from './components/applications/applications';
function App() {
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
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username,
        password,
      });
      console.log('Post created successfully');
      if (response.data.status != 200) {
        setLogin(false);
        console.log('login failed');
        return false;
      }
      else{
        console.log(response);
        console.log('login successfull');
        setLogin(true);
        return true;
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/login" element= {isLoggedIn ? (<Home />) : (<Login onLogin={handleLogin} />)}/>
      <Route path="/applications" element={<Applications/>}/>
        
    </Routes>
  );
}

export default App;
