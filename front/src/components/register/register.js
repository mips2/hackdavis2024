import React from 'react'
import './register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import axios from 'axios';
import { useEffect } from 'react';

const Register = ({onLogin,isLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn1 = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn1) {
            navigate('/');  // Redirects to the home page if the user is already logged in
        }
    }, [isLoggedIn, navigate]);  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await onLogin(username, password);
        if (result === true) {
          console.log('login successful');
          
          navigate('/');
        }
      };

  return (
    <div class="background">
        <div class="register-container">
            <form class="register-form">
                <h2>Register New Account</h2>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Enter your name" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" placeholder="Enter your email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="phone-number">Phone Number:</label>
                    <input type="text" placeholder="Enter your phone number" id="phone-number" name="phone-number" required />
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" placeholder="Enter your address" id="address" name="address" required />
                </div>
                <div class="form-group">

                    <label for="username">Username:</label>
                    <input type="text" placeholder="Enter your username" id="username" name="username" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter your password" id="password" name="password" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" placeholder="Confirm password" id="confirm-password" name="confirm-password" required />

                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
    
  )
}

export default Register