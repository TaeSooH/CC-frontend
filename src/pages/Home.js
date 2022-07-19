import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeLogin from '../components/HomeLogin'
import "../style/Home.css"

const Login = () => {
  return (
    <div className='container'>
      <HomeContent />
      <HomeLogin />
    </div>
  )
}

export default Login