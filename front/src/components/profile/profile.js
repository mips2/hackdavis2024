import React from 'react'
import Header from '../header'
import './profile.css'

const Profile = () => {
    
  return (
    <div className="ProfilePage">
      <header>
        <h1>Welcome, John Doe</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="/logout" class="logout-button">Logout</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <section className="profile-info">
          <h2>Profile Information</h2>
          <div className="profile-details">
            <div>
              <label htmlFor="name">Name:</label>
              <p>John Doe</p>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <p>johndoe@example.com</p>
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <p>+1234567890</p>
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <p>123 Main St, City, Country</p>
            </div>
            {/* Add more profile details as needed */}
          </div>
        </section>
        <section className="job-applications">
            <h2>Job Applications</h2>
            <ul>
                <li>
                    <h3>Software Engineer</h3>
                    <p>Company A</p>
                    <p>Status: Pending</p>
                </li>
                <li>
                    <h3>Web Developer</h3>
                    <p>Company B</p>
                    <p>Status: Approved</p>
                </li>
                {/* Add more job applications as needed */}
            </ul>
        </section>
      </main>
  </div>
  )
}

export default Profile;