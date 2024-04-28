import React, { useState } from 'react';
import './home.css';


function InputField({ label, type, id, placeholder }) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} aria-label={placeholder} className="input" />
    </div>
  );
}

function UploadResume() {
  return (
    <div className="upload-resume">
      <div className="upload-text">Upload Resume</div>
      <div className="drag-drop-text">Drag and drop</div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="select-text">Select...</div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6cb4bd766d22a917d221d38f8ac8896e16448572fe4ae6fee2100a8c09e50e?apiKey=c7598dd2036b4baf9e49409c4a6781c6&" alt="" className="dropdown-icon" />
    </div>
  );
}

// JobDetailsPopup component
const JobDetailsPopup = ({ job, onClose }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="job-details-popup">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <main className="main-container">
          <h1 className="job-title">{job.title}</h1>
          <div className="job-location">{job.location}</div>
          <InputField label="Name" type="text" id="name" placeholder="Name:" />
          <InputField label="Age" type="number" id="age" placeholder="Age:" />
          <InputField label="Preferred Pronouns" type="text" id="pronouns" placeholder="Preferred Pronouns:" />
          <UploadResume />
          <InputField label="Email" type="email" id="email" placeholder="Email:" />
          <InputField label="Phone Number" type="tel" id="phone" placeholder="Phone Number:" />
          <div className="citizenship-container">
            <div className="citizenship-question">Are you a U.S. citizen?</div>
            <div className="yes-no">Yes / No</div>
          </div>
          <div className="education-container">
            <div className="education-text">Education</div>
            <Dropdown />
          </div>
          <button className="submit-button">Submit</button>
        </main>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// JobCard component
function JobCard({ job }) {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const toggleDetailsPopup = () => {
    setShowDetailsPopup(!showDetailsPopup);
  };

  return (
    <div className="job-card-container">
      <article className="job-card">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-location">{job.location}</div>
        <button className="quick-apply-btn" onClick={toggleDetailsPopup}>
          Quick Apply
        </button>
      </article>
      {showDetailsPopup && <JobDetailsPopup job={job} onClose={toggleDetailsPopup} />}
    </div>
  );
}
export default JobCard;
