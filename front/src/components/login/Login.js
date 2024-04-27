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
      <Header></Header>
      <div class="container">
        <form class="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div class="form-group">
              <label for="username">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div class="form-group">
              <label for="password">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
  </div>
  )
}

export default Login