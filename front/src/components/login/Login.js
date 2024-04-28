import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../home/Home';
import './login.css';
const Login = ({onLogin,isLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    if(localStorage.getItem('isLoggedIn') === 'true'){
        window.location.href = '/';
        return <Home/>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onLogin(username, password);
        if (result === true) {
          console.log('login successful');
          navigate('/');
        }
      };
      const handleRegister = () => {
        // Code to execute when the button is clicked
        navigate('/register');
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
              <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div class="showpw-container">
                <button class="showpw" type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            </div>
          </div>
          <button type="submit">Log In</button>
          <button type="register" onClick={handleRegister}>Create New Account</button>
        </form>
      </div>


  </div>
  );
};

export default Login