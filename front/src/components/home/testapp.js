import React from 'react';

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

function MyComponent() {
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

      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .main-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          font-weight: 400;
          padding: 80px 60px 51px;
          justify-content: flex-end;
        }

        .job-title {
          color: #000;
          margin-top: 84px;
          font: 48px Arial, sans-serif;
        }

        .job-location {
          color: #000;
          margin-top: 20px;
          font: 24px Arial, sans-serif;
        }

        .input-field {
          border-radius: 10px;
          background-color: #dcebf5;
          margin-top: 35px;
          align-items: start;
          color: #000;
          justify-content: center;
          padding: 31px;
          font: 40px Arial, sans-serif;
        }

        .input {
          width: 100%;
          border: none;
          background-color: transparent;
          font: inherit;
          color: inherit;
        }

        .upload-resume {
          border-radius: 10px;
          background-color: #dcebf5;
          display: flex;
          margin-top: 35px;
          flex-direction: column;
          padding: 30px 80px 80px 31px;
        }

        .upload-text {
          color: #000;
          align-self: start;
          font: 40px Arial, sans-serif;
        }

        .drag-drop-text {
          color: rgba(62, 43, 43, 0.16);
          align-self: center;
          margin: 54px 0 7px;
          font: 64px Arial, sans-serif;
        }

        .citizenship-container {
          border-radius: 10px;
          background-color: #dcebf5;
          display: flex;
          margin-top: 35px;
          gap: 20px;
          font-size: 40px;
          color: #000;
          padding: 26px 31px;
        }

        .citizenship-question {
          font-family: Arial, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }

        .yes-no {
          font-family: Arial, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }

        .education-container {
          border-radius: 10px;
          background-color: #dcebf5;
          display: flex;
          margin-top: 35px;
          flex-direction: column;
          font-size: 40px;
          color: #000;
          padding: 31px;
        }

        .education-text {
          font-family: Arial, sans-serif;
        }

        .dropdown {
          background-color: #d9d9d9;
          display: flex;
          gap: 20px;
          margin: 38px 0 17px;
          padding: 5px 29px;
        }

        .select-text {
          font-family: Arial, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }

        .dropdown-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 60px;
        }

        .submit-button {
          border-radius: 10px;
          background-color: #305bf4;
          align-self: end;
          margin-top: 74px;
          width: 292px;
          max-width: 100%;
          align-items: center;
          color: #fff;
          justify-content: center;
          padding: 29px 60px;
          font: 48px Arial, sans-serif;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
