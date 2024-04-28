import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import Login from '../login/Login';
import './home.css';

import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard'; // Assuming JobCard is in the same directory



const SearchBar = ({ onSearchChange,onLocationChange }) => (
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
        onChange={e => onSearchChange(e.target.value)}
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
        onChange={e => onLocationChange(e.target.value)}
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
  console.log(jobs);
  const [displayedJobs, setDisplayedJobs] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  console.log(displayedJobs);
  
  const [activeFilters, setActiveFilters] = useState({
    fullTime: false,
    partTime: false,
    softwareEngineering: false,
    computerScience: false
  });
  useEffect(() => {
    setDisplayedJobs(jobs);
  }, [jobs]);

  useEffect(() => {
    filterJobs();
  }, [activeFilters]); 

  useEffect(() => {
    const filteredJobs = jobs.filter(job => 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationTerm.toLowerCase())
    );
    setDisplayedJobs(filteredJobs);
  }, [searchTerm, locationTerm,jobs]);

  const filterJobs = () => {
    let filteredJobs = jobs;
    
    if(activeFilters.fullTime) {
      filteredJobs = filteredJobs.filter(job => job.type === 'Full-Time');
    }
    if(activeFilters.partTime) {
      filteredJobs = filteredJobs.filter(job => job.type === 'Part-Time');
    }
    if(activeFilters.softwareEngineering) {
      filteredJobs = filteredJobs.filter(job => job.Category === 'Software Engineering');
    }
    if(activeFilters.computerScience) {
      filteredJobs = filteredJobs.filter(job => job.Category === 'Computer Science');
    }
    
    setDisplayedJobs(filteredJobs);
  }
  const toggleFilter = (filterKey) => {
    const isActive = activeFilters[filterKey];
    const updatedFilters = {
      ...activeFilters,
      [filterKey]: !isActive
    };

    setActiveFilters(updatedFilters);

    const anyActive = Object.values(updatedFilters).some(status => status);
    if (!anyActive) {
      setDisplayedJobs(jobs);  
    }
  };

  console.log("home");
  console.log(displayedJobs);
  if (localStorage.getItem('isLoggedIn') === 'false') {
      window.location.href = '/login';
      return <Login/>
  }


  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  const handleLocationChange = (term) => {
    setLocationTerm(term);
  };
return (
  <div>
    <Header></Header>
    <div className="app">
      <main className="main-content">
        <SearchBar onSearchChange={handleSearchChange} onLocationChange={handleLocationChange} />
        <div className="filters">
          <FilterButton onClick={() => toggleFilter('fullTime')}>Full-Time</FilterButton>
          <FilterButton onClick={() => toggleFilter('partTime')} >Part-Time</FilterButton>
          <FilterButton onClick={() => toggleFilter('softwareEngineering')}>Software Engineering</FilterButton>
          <FilterButton onClick={() => toggleFilter('computerScience')}>Computer Science</FilterButton>
          <FilterButton>Filters - 4</FilterButton>
        </div>
        {displayedJobs.map((job) => (
          <JobCard key={job._id.$oid} job={job} />
        ))}
      </main>
    </div>
  </div>
)
}

export default Home;