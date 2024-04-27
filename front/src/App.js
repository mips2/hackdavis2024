import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          YO WSG <code>yooooooo</code> Number is: {data !== null ? data : 'Loading...'}
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
