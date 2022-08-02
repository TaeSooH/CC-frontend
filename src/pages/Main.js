import React from 'react'
import GraphBox from '../components/GraphBox'
import MyCommit from '../components/MyCommit'
import Nav from '../components/Nav'
import Profile from '../components/Profile'
import TodayCommit from '../components/TodayCommit'
import "../style/Main.css"

const Main = () => {
  return (
    <div className='container'>
        <div className='main_wrap'>
            <Nav />
            <Profile />
            <div className='main_content_wrap'>
              <TodayCommit />
              <GraphBox />
              <MyCommit />
            </div>
        </div>
    </div>
  )
}

export default Main