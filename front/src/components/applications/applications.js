import React from 'react'
import Header from '../header'

const Applications = () => {
    
  return (
    <div>
      <Header></Header>
      <h1>Applications Page</h1>
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
    </div>
  )
}

export default Applications;