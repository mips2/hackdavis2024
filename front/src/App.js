import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios

function App() {
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
  );
}

export default App;
