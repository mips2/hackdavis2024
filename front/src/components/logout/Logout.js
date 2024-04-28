import React from 'react'

const Logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('username', null);
    localStorage.setItem('isCompany', false);
    window.location.href = '/login';
  return (
    <div>Logout</div>
  )
}

export default Logout