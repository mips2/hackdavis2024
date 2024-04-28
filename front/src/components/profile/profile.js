import React from 'react'
import Header from '../header'

const Profile = () => {
    
  return (
    <div>
      <Header></Header>
      <h1>Profile Page</h1>
      <p>Conditionally render this page if user is logged in. If not, redirect them to login path.</p>
    </div>
  )
}

export default Profile;