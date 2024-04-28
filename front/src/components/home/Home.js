import React from 'react'
import Header from '../header'

const Home = () => {
    if (localStorage.getItem('isLoggedIn') === 'false') {
        window.location.href = '/login';
    }
  return (
    <div>
      <Header>Help me</Header>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home