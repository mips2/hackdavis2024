import React from 'react'
import Header from '../header'
import './profile.css'

const Profile = () => {
    
  return (
    <div>
      <Header></Header>
      <h1>Profile Page</h1>
      <p>Conditionally render this page if user is logged in. If not, redirect them to login path.</p>
      <a href="/logout" class="logout-button">Logout</a>
    </div>
  )
}

export default Profile;