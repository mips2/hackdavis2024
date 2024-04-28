import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProfileUpdate.css';

const ProfileComponent = () => {
    console.log("ProfileComponent");
    const [profile, setProfile] = useState([]);

const loadProfile = async () => {

  try {
    console.log("loading applications");
    const username = localStorage.getItem('username');
    const response = await axios.post('http://127.0.0.1:5000/profile', {
      username,
    });
    if (response.data.status !== 200) {
      console.log('applications failed');
      console.log(response);
      return false;
    }
    else{
      console.log('applications successfull');
      console.log(response);
      setProfile(response.data.data);
      return true;
    }
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
useEffect(() => {
  loadProfile();
}, []);
console.log(profile);


const YourComponent = ({ profile }) => {
  // Define the handleEditClick function to navigate to profileUpdated.js
  const handleEditClick = () => {
    // Navigate to profileUpdated.js
    window.location.href = './ProfileUpdate';
  };
  return (
    <div><section className='education'>
    <h2>Education</h2>
    <button className='button1' onClick={handleEditClick}>Edit personal information</button>
    <ul>
      {profile.Education?.map((edu, index) => (
        <li key={index}>
          <h3>{edu.School}</h3>
          <p>Start Year: {edu.StartYear}</p>
          <p>End Year: {edu.EndYear}</p>
        </li>
      ))}
    </ul>
  </section>
  <section className='education'>
    <h2>Work Experience</h2>
    <ul>
      {profile['Work Experience']?.map((work, index) => (
        <li key={index}>
          <h3>{work.Company}</h3>
          <p>Start Year: {work.StartYear}</p>
          <p>End Year: {work.EndYear}</p>
          <ul>
            {work.Responsibilities?.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
  <section className='education'>
    <h2>Skills</h2>
    <ul>
      {profile.Skills?.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section></div>
  );
};
return <YourComponent profile={profile} />;
};

export default ProfileComponent