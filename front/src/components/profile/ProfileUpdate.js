import axios from 'axios';
import React, { useState } from 'react';
import './ProfileUpdate.css';

const ProfileUpdate = () => {
  const [education, setEducation] = useState({
    "School": '',
    "StartYear": '',
    "EndYear": ''
  });

  const [workExperience, setWorkExperience] = useState({
    "Company": '',
    "StartYear": '',
    "EndYear": ''
  });

  const [skill, setSkill] = useState('');

  const handleEducationChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleWorkExperienceChange = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };

  const submitEducation = (e) => {
    e.preventDefault();
    console.log('Submitting Education:', education);
    updateProfile("Education",education);
  };

  const submitWorkExperience = (e) => {
    e.preventDefault();
    console.log('Submitting Work Experience:', workExperience);
    updateProfile("Work Experience",workExperience);
  };

  const submitSkill = (e) => {
    e.preventDefault();
    console.log('Submitting Skill:', skill);
    updateProfile("Skills",skill);
  };
  const updateProfile = async (update_field,new_value) => {
    console.log(localStorage.getItem('username'));
    try {
        const username = localStorage.getItem('username');
      const response = await axios.post('http://127.0.0.1:5000/profile_update', {
        username,
        update_field,
        new_value
      });
      console.log('Post created successfully');
      if (response.data.status !== 200) {
        console.log('login failed');
        return false;
      }
      else{
        console.log('login succeeded');
        console.log(response);
        return true;
      }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="body">
      <form onSubmit={submitEducation}>
        <h2>Education</h2>
        <input className="edu" type="text" name="School" placeholder="School" value={education.school} onChange={handleEducationChange} />
        <input className="edu" type="text" name="StartYear" placeholder="Start Year" value={education.startYear} onChange={handleEducationChange} />
        <input className="edu" type="text" name="EndYear" placeholder="End Year" value={education.endYear} onChange={handleEducationChange} />
        <button className="button2" type="submit">Submit Education</button>
      </form>

      <form onSubmit={submitWorkExperience}>
        <h2>Work Experience</h2>
        <input className="work" type="text" name="Company" placeholder="Company" value={workExperience.company} onChange={handleWorkExperienceChange} />
        <input className="work" type="text" name="StartYear" placeholder="Start Year" value={workExperience.position} onChange={handleWorkExperienceChange} />
        <input className="work" type="text" name="EndYear" placeholder="End Year" value={workExperience.years} onChange={handleWorkExperienceChange} />
        <button className="button2" type="submit">Submit Work Experience</button>
      </form>

      <form onSubmit={submitSkill}>
        <h2>Skills</h2>
        <input className="skill" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill" />
        <button className="button2" type="submit">Submit Skill</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
