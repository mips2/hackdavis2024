import axios from 'axios';
import React, { useState } from 'react';
import './applypage.css';
import { useParams } from 'react-router-dom';


function InputField({ label, name, type, value, onChange, placeholder }) {
  return (
    <div className="input-field">
      <label htmlFor={name} className="visually-hidden">
        {label}
      </label>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} aria-label={placeholder} className="input" />
    </div>
  );
}

function UploadResume({ onFileChange }) {
  return (
    <div className="upload-resume">
      <input type="file" id="resume" name="resume" onChange={onFileChange} style={{ display: 'none' }} />
      <label htmlFor="resume" className="upload-text">
        Drag and drop or click to upload Resume
      </label>
    </div>
  );
}

function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    pronouns: '',
    email: '',
    phone: '',
    citizenship: '',
    education: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
    });

    try {
        const response = await axios.post('http://localhost:5000/submit_application', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        alert('Application Submitted!');
        console.log(response.data);
        window.location.href = '/';  // Redirect to homepage using window.location.href
    } catch (error) {
        alert('Submission failed');
        console.error(error);
    }
  };

  return (
    <main className="main-container">
      <button className="go-back">
        <a href="./" className="redirect-link">&#x2190; Go back</a>
      </button>
      <h1 className="job-title">Rhombus - Software Engineering Intern</h1>
      <div className="job-location">Sacramento, CA, United States</div>
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name:" />
        <InputField label="Age" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age:" />
        <InputField label="Preferred Pronouns" name="pronouns" type="text" value={formData.pronouns} onChange={handleChange} placeholder="Preferred Pronouns:" />
        <UploadResume onFileChange={handleFileChange} />
        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email:" />
        <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number:" />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </main>
  );
}

export default ApplyPage;
