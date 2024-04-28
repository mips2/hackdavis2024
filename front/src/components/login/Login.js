import React from 'react'
import './login.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({onLogin}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onLogin(username, password);
        if (result === true) {
          console.log('login successful');
          navigate('/');
        }
      };

  return (
    <div class="wrap">
      <div class="container2">
        <h1>Website Name</h1>
        <p>A new approach to applying for jobs.</p>
      </div>
      <div class="container">
        <form class="login-form" onSubmit={handleSubmit}>
          <div class="form-group">
              <label class="username">Username:</label>
              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div class="form-group">
              <label class="password">Password:</label>
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Log In</button>
          <button type="register">Create New Account</button>
        </form>
      </div>


  </div>
  )
}

export default Login