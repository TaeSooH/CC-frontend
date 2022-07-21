import React from 'react'
import Nav from '../components/Nav'
import Profile from '../components/Profile'
import "../style/Main.css"

const Main = () => {
  return (
    <div className='container'>
        <div className='main_wrap'>
            <Nav />
            <Profile />
        </div>
    </div>
  )
}

export default Main