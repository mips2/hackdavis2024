import React from 'react'
import Header from '../header'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Applications = () => {

  const [applications, setApplications] = useState([]);

  const loadApplications = async () => {

    try {
      console.log("loading applications");
      const username = localStorage.getItem('username');
      const response = await axios.post('http://127.0.0.1:5000/applications', {
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
        setApplications(response.data.data);
        return true;
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  useEffect(() => {
    loadApplications();
  }, []);
  console.log(applications);
  return (
    <div>
      <Header></Header>
      <h1>Applications Page</h1>
      <section className="job-applications">
          <h2>Job Applications</h2>
          <ul>
          {applications.map((application, index) => (
            <li key={index}>
              <h3>{application.job_title}</h3>  {/* Assuming application object has jobTitle */}
              <p>{application.company_name}</p>  {/* Assuming application object has companyName */}
              <p>Status: {application.application_status}</p>  {/* Assuming application object has status */}
            </li>
          ))}
          </ul>
        </section>
    </div>
  )
}

export default Applications;