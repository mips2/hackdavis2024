import React from 'react'
import Login from '../login/Login';

const CompanyPage = () => {
    if (localStorage.getItem('isLoggedIn') === 'false') {
        window.location.href = '/login';
        return <Login/>
    }

    // each logged in user can have a flag
    // company: true, or company: false

    // based off of that, we render the fields as editable or just viewable
    return(
        <h1>You are on a company page because you are company account.</h1>
    );
}

export default CompanyPage;
