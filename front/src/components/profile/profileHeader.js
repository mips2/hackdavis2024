import React from 'react'
import './profile.css'
const ProfileHeader = () => {
    return(
        <div className="ProfilePage">
            <header>
                <h1>Welcome, John Doe</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/logout" class="logout-button">Logout</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default ProfileHeader;