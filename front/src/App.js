import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
function App() {
  const [data, setData] = useState(null);  // State to store response data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosgit.get('http://127.0.0.1:5000/');  // Replace with your backend URL
        setData(response.data.number);  // Access correct property from response data
        console.log('Data:', response.data); // Log the data to the console
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
