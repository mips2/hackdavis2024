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
  )
}

export default Login