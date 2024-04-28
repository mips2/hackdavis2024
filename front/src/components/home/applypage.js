import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

function Applypage() {
  return (
    <>
      <main className="main-container">
        <h1 className="job-title">Rhombus - Software Engineering intern</h1>
        <div className="job-location">Sacramento, CA, United States</div>
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

      
    </>
  );
}

export default Applypage;