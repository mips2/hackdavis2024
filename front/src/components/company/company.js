import React from 'react'
import Login from '../login/Login';
import Home from '../home/Home';
import axios from 'axios';

const CompanyPage = () => {
    if (localStorage.getItem('isLoggedIn') === 'false') {
        window.location.href = '/login';
        return <Login/>
    }

    if(localStorage.getItem('isCompany') === 'false'){
        window.location.href = '/';
        return <Home/>
    }

    const baseURL = 'http://localhost:5000/'; // Replace with your backend URL

    const axiosInstance = axios.create({
        baseURL
    });
    axiosInstance.post('/get_apps', {
        companyName: localStorage.getItem('username')
      }).then(response => {
        if(response.status === 200){
          console.log("Backend should return an apps list 200");
        }
        else{
          console.log("Backend responded with ", response.status)
        }
      })
    // do an axios post to backend:


    // each logged in user can have a flag
    // company: true, or company: false

    // based off of that, we render the fields as editable or just viewable

    // get list of application objects belonging to the named company
    return(
        <div>
            <h1>Company Page</h1>
            <h1>Active Applications</h1>
            <h1>Make Application</h1>
            <h1>Edit Application</h1>
        </div>
    );
}

export default CompanyPage;
