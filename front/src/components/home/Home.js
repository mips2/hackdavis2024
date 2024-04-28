import React from 'react';
import Header from '../header';
import Login from '../login/Login';
import './home.css';
import { useState,useEffect} from 'react';

const JobCard = ({ job }) => (
<div className ="job-card-container">
<article className="job-card">
  <div className="company-logo">
    <img src={job.logo} alt={`${job.company} logo`} />
  </div>
  <div className="job-details">
    <div className="job-header">
      <h3 className="job-title">{job.title}</h3>
      <div className="buttoncont">
      <button className="quick-apply-btn">Quick Apply</button>
      </div>
    </div>
    <div className="job-meta">
      <p className="company-location">
        {job.company}
        <br />
        {job.location}
      </p>
      <div className="buttoncont">
      <button className="external-apply-btn">Apply Externally</button>
      </div>
    </div>
  </div>
</article>
</div>
);

const SearchBar = () => (
<div className="search-bar">
  <div className="search-input">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dac0bffb10fa8b9b03590bb619ad64d0747a7bc9edb75820fe380bf14b252864?apiKey=c7598dd2036b4baf9e49409c4a6781c6&" alt="Search icon" />
    <label htmlFor="search-jobs" className="visually-hidden">
      Search for companies or positions
    </label>
    <input
      type="text"
      id="search-jobs"
      placeholder="Search for companies or positions..."
      aria-label="Search for companies or positions"
    />
  </div>
  <div className="location-input">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aa7725667142a53b63a4754839f021dbff43134149b29eb95e1e8b6f5452fdf?apiKey=c7598dd2036b4baf9e49409c4a6781c6&" alt="Location icon" />
    <label htmlFor="location" className="visually-hidden">
      City, State, or Zip Code
    </label>
    <input
      type="text"
      id="location"
      placeholder="City, State, or Zip Code"
      aria-label="City, State, or Zip Code"
    />
  </div>
</div>
);

const FilterButton = ({ children, onClick }) => (
  <button className="filter-btn" onClick={onClick}>
    {children}
  </button>
);
const Home = ({ jobs }) => {
  const [jobs1, setJobs1] = useState(jobs);
  
  useEffect(() => {
    setJobs1(jobs);
  }, [jobs]);

  const handleFilterSacramento = () => {
    console.log("filtering");
    const filtered = jobs1.filter(job => job.location === "Sacramento, CA, United States");
    setJobs1(filtered);
  };
  console.log("home");
  console.log(jobs);
  if (localStorage.getItem('isLoggedIn') === 'false') {
      window.location.href = '/login';
      return <Login/>
  }
return (
  <div>
    <Header></Header>
    <div className="app">
      <main className="main-content">
        <SearchBar />
        <div className="filters">
          <FilterButton onClick={handleFilterSacramento}>Full-Time</FilterButton>
          <FilterButton>Part-Time</FilterButton>
          <FilterButton>Software Engineering</FilterButton>
          <FilterButton>Computer Science</FilterButton>
          <FilterButton>Filters - 4</FilterButton>
        </div>
        {jobs1.map((job) => (
          <JobCard key={job._id.$oid} job={job} />
        ))}
      </main>
    </div>
  </div>
)
}

export default Home;
