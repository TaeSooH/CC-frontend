import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeLogin from '../components/HomeLogin'

const Login = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
      <HomeContent />
      <HomeLogin />
    </div>
  )
}

export default Login