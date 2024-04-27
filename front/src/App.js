import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios

function App() {
  const [data, setData] = useState(null);  // State to store response data

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:5000/');  // Replace with your backend URL
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          YO WSG <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
