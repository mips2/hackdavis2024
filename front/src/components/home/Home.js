import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyPage from '../company/company';
import Header from '../header';
import Login from '../login/Login';
import './home.css';

// Component for displaying a job card
const JobCard = ({ job }) => {
  // Hook for navigation
  const navigate = useNavigate();

  return (
    <div className="job-card-container">
      <article className="job-card">
        {/* Company logo */}
        <div className="company-logo">
          <img src={job.logo} alt={`${job.company} logo`} />
        </div>
        {/* Job details */}
        <div className="job-details">
          <div className="job-header">
            <h3 className="job-title">{job.title}</h3>
          </div>
          <div className="job-meta">
            {/* Company and location */}
            <p className="company-location">
              {job.company}
              <br />
              {job.location}
            </p>
          </div>
        </div>
        {/* Quick apply button */}
        <section className="quickcont">
          <button className="quick-apply-btn" onClick={() => navigate('./applypage')}>
            Quick Apply
          </button>
        </section>
      </article>
    </div>
  );
};

// Component for the search bar
const SearchBar = ({ onSearchChange, onLocationChange }) => (
  <div className="search-bar">
    {/* Search input */}
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
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
    {/* Location input */}
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
        onChange={(e) => onLocationChange(e.target.value)}
      />
    </div>
  </div>
);

// Component for filter button
const FilterButton = ({ children, onClick }) => (
  <button className="filter-btn" onClick={onClick}>
    {children}
  </button>
);

// Main component for the home page
const Home = ({ jobs }) => {
  // State for displayed jobs
  const [displayedJobs, setDisplayedJobs] = useState(jobs);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for location term
  const [locationTerm, setLocationTerm] = useState('');
  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    fullTime: false,
    partTime: false,
    softwareEngineering: false,
    computerScience: false
  });

  // Effect hook to update displayed jobs when jobs change
  useEffect(() => {
    setDisplayedJobs(jobs);
  }, [jobs]);

  // Effect hook to filter jobs when active filters change
  useEffect(() => {
    filterJobs();
  }, [activeFilters]);

  // Effect hook to filter jobs based on search term and location term
  useEffect(() => {
    const filteredJobs = jobs.filter(job =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationTerm.toLowerCase())
    );
    setDisplayedJobs(filteredJobs);
  }, [searchTerm, locationTerm, jobs]);

  // Function to filter jobs based on active filters
  const filterJobs = () => {
    let filteredJobs = jobs;

    if (activeFilters.fullTime) {
      filteredJobs = filteredJobs.filter(job => job.type === 'Full-Time');
    }
    if (activeFilters.partTime) {
      filteredJobs = filteredJobs.filter(job => job.type === 'Part-Time');
    }
    if (activeFilters.softwareEngineering) {
      filteredJobs = filteredJobs.filter(job => job.Category === 'Software Engineering');
    }
    if (activeFilters.computerScience) {
      filteredJobs = filteredJobs.filter(job => job.Category === 'Computer Science');
    }

    setDisplayedJobs(filteredJobs);
  };

  // Function to toggle filter
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

  // Redirect to login page if not logged in
  if (localStorage.getItem('isLoggedIn') === 'false') {
    window.location.href = '/login';
    return <Login />
  }

  // Handlers for search and location change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  const handleLocationChange = (term) => {
    setLocationTerm(term);
  };

  // Render home page
  return (
    <div>
      <Header></Header>
      <div className="app">
        <main className="main-content">
          {/* Search bar */}
          <SearchBar onSearchChange={handleSearchChange} onLocationChange={handleLocationChange} />
          {/* Filters */}
          <div className="filters">
            <FilterButton onClick={() => toggleFilter('fullTime')}>Full-Time</FilterButton>
            <FilterButton onClick={() => toggleFilter('partTime')}>Part-Time</FilterButton>
            <FilterButton onClick={() => toggleFilter('softwareEngineering')}>Software Engineering</FilterButton>
            <FilterButton onClick={() => toggleFilter('computerScience')}>Computer Science</FilterButton>
            <FilterButton>Filters - 4</FilterButton>
          </div>
          {/* Displayed jobs */}
          {displayedJobs.map((job) => (
            <JobCard key={job._id.$oid} job={job} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
