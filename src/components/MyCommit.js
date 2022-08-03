import React from 'react'
import "../style/Main.css"
import MyDailyCommit from './MyDailyCommit'

const MyCommit = () => {
  return (
    <div className='MyCommit_wrap'>
      <div className='MyCommit_text_box'>
        <p>My Total Commits</p>
      </div>
      <div className='MyCommit_box'>
        <div className='MyCommit_innerBox'>
          <MyDailyCommit />
        </div>
      </div>
    </div>
  )
}

export default MyCommit