import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import ProfileComponent from './ProfileComponent';
const Profile = () => {

  const baseURL = 'http://localhost:5000'; // Replace with your backend URL

  const axiosInstance = axios.create({
    baseURL
  });

  // State for edit mode of different fields
  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  // State for the values of different fields
    const [values, setValues] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
    });

  useEffect(() => {
    console.log("loadingProfile")
    loadProfile();  // Call loadProfile when the component mounts
  }, []); // Empty dependency array ensures this runs only once on component mount

  const loadProfile = async () => {
    try {
      console.log("Loading profile...");
      const username = localStorage.getItem('username');
      if (!username) {
        console.error("No username found in localStorage.");
        return; // Exit if no username is found
      }
      const response = await axiosInstance.post('/profile1', { username });
      if (response.data.status === 200) {
        console.log("200")
        console.log(response.data.data);
        setValues({
          name: response.data.data.name || '',
          email: response.data.data.email || '',
          phone: response.data.data.phone || '',
          address: response.data.data.address || '',
        });
      } else {
        console.log("L bozo")
        console.error("No user found with that username");
      }
    } catch (error) {
      console.error("Error loading the profile:", error);
    }
  };
    
  // State for storing original values before editing
  const [originalValues, setOriginalValues] = useState({});

  // Function to handle changes in field values
  const handleChange = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  // Function to toggle edit mode of a field
  const toggleEditMode = (field) => {
    setOriginalValues({ ...values }); // Save original values before editing
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  // Function to save changes and exit edit mode
  const saveChanges = (field) => {
    setEditMode({ ...editMode, [field]: false });
    let attribute_changed = "";
    let attr_value;
    console.log("changed field: ", field);
    if(field === "phone"){
      attribute_changed = "phone";
      attr_value = values.phone;
    }
    if(field === "email"){
      attribute_changed = "email";
      attr_value = values.email;
    }
    if(field === "name"){
      attribute_changed = "name";
      attr_value = values.name;
    }
    if(field === "address"){
      attribute_changed = "address";
      attr_value = values.address;
    }
    console.log("You changed ", attribute_changed, " to ", attr_value);

    // do an axios post to backend:
    axiosInstance.post('/update_profile', {
      attribute_changed: attribute_changed,
      new_attr_value: attr_value
    }).then(response => {
      if(response.status === 200){
        console.log("Backend fulfilled our request to update profile.");
      }
      else{
        console.log("Backend responded with ", response.status)
      }
    })

  };

  // Function to cancel changes and exit edit mode
  const cancelChanges = (field) => {
    setValues({ ...originalValues }); // Revert to original values
    setEditMode({ ...editMode, [field]: false });
  };

  // Function to handle key press events in input fields
  const handleKeyPress = (event, field) => {
    if (event.key === 'Enter') {
      saveChanges(field);
    }
  };

  // Function to render input field or plain text based on edit mode
const renderField = (field) => {
  if (editMode[field]) {
    return (
      <div>
        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
        <input
          id={field}
          value={values[field]}
          onChange={(e) => handleChange(field, e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, field)}
          autoFocus
        />
        <div className="button-container">
          <button className="save-button" onClick={() => saveChanges(field)}>Save</button>
          <button className="cancel-button" onClick={() => cancelChanges(field)}>Cancel</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
        <p>{values[field]} <button onClick={() => toggleEditMode(field)}>Edit</button></p>
      </div>
    );
  }
};


  return (
    <div className="ProfilePage">
      <header>
        <h1>Welcome {localStorage.getItem('username')}</h1>
        <nav>
            <ul>
                <li><a href="/"></a></li>
                <li><a href="/applications">My Applications</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout" className="logout-button">Logout</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <section className="profile-info">
          <h2>Profile Information</h2>
          <div className="profile-details">
            {renderField('name')}
            {renderField('email')}
            {renderField('phone')}
            {renderField('address')}
          </div>
        </section>
        <ProfileComponent/>
      
      </main>
    </div>
  );
}

export default Profile;
