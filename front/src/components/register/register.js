import React from 'react'
import './register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navigate('/');  // Redirects to the home page if the user is already logged in
        }
    }, [navigate]);

    const [isCompany, setIsChecked] = useState(false); // Initial state (unchecked)

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
        let checked = "false";
        if(event.target.checked){
            checked = "true";
        }
        console.log("Checkbox is ", checked);
    };

    const handleRegister = async (event) => {
        event.preventDefault(); 
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:5000/register', {
                username,
                password,
                name,
                email,
                phone,
                address,
                isCompany
            });

            if (response.data.status === 401) {
                console.error('Registration failed');
                setName('');
                setEmail('');
                setPhone('');
                setAddress('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                setIsChecked(false);

            } else {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                localStorage.setItem('isCompany', isCompany );
                navigate('/'); 
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    
  return (
    <div class="background">
        <div class="register-container">
            <form class="register-form" onSubmit={handleRegister}>
                <h2>Register New Account</h2>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Enter your name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" placeholder="Enter your email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="phone-number">Phone Number:</label>
                    <input type="text" placeholder="Enter your phone number" id="phone-number" name="phone-number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" placeholder="Enter your address" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div class="form-group">

                    <label for="username">Username:</label>
                    <input type="text" placeholder="Enter your username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div> 
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter your password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" placeholder="Confirm password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                </div>
                Check this if you are a company:<input type="checkbox" checked={isCompany} onChange={handleChange}></input>
                <button type="register">Register</button>
            </form>
        </div>
    </div>
    
  )
}

export default Register