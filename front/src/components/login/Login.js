import React from 'react'
import Header from '../header'
import './login.css'
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://127.0.0.1:5000/login', {
            username,
            password,
          });
          // Optionally, handle success (e.g., show a success message)
          console.log('Post created successfully');
        } catch (error) {
          // Optionally, handle error (e.g., show an error message)
          console.error('Error creating post:', error);
        }
      };

  return (
    <div>
      <div class="container">
        <form class="login-form" onSubmit={handleSubmit}>
          <div class="form-group">
              <label class="username">Username</label>
              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div class="form-group">
              <label class="password">Password</label>
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