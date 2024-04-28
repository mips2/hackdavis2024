import React from 'react'
import Header from '../header'
import Login from '../login/Login';
const Home = () => {
    if (localStorage.getItem('isLoggedIn') === 'false') {
        window.location.href = '/login';
        return <Login/>
    }
  return (
    <div>
      <Header>Help me</Header>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home