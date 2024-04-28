import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../header';
import './applications.css';

function Applications() {
  const [applications, setApplications] = useState([]);

  const loadApplications = async () => {
    try {
      console.log("loading applications");
      const username = localStorage.getItem("username");
      const response = await axios.post("http://127.0.0.1:5000/applications", {
        username,
      });
      if (response.data.status !== 200) {

        console.log("applications failed");


        console.log(response);
        return false;
      } else {
        console.log("applications successful");
        console.log(response);
        setApplications(response.data.data);
        return true;
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="num-container">
<<<<<<< Updated upstream
      <p className="numjob">NUMBER OF JOBS APPLIED TO: {applications.length}</p>
      <p className="numapp">NUMBER OF APPLICATIONS LEFT: {/*Assuming num applications left obj exists*/}</p>
      <p className="refreshrate">REFRESHING IN: {/*Assuming refresh rate obj exists*/} days</p>
=======
      <p className="numjob">Number of jobs applied to: {applications.length}</p>
      <p className="numapp">Number of applications left: 2 {/*Assuming num applications left obj exists*/}</p>
      <p className="refreshrate">Refreshing in: {/*Assuming refresh rate obj exists*/} days</p>
>>>>>>> Stashed changes
      </div>

      <div className ="app-card-container">
      {applications.map((application, index) => (
          <div className="app-card" key={index}>
            <div className="company-logo">
              <img src={application.logo} alt={`${application.company_name} logo`} />
            </div>
            <div className="job-details">
              <div className="job-header">
                <h3 className="job-title">{application.job_title}</h3> {/* Assuming application object has jobTitle */}

                <h3 className="applied-date">Applied: 
                  <br />{application.date}
                </h3> {/*Assume app submisson date obj exists*/}

              </div>
              <div className="job-meta">
                  <p className="app-status">{application.company_name}</p> {/* Assuming application object has companyName */}
                  <p>Status: {application.application_status}</p>{" "}
                  {/* Assuming application object has status */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



export default Applications;