import React from 'react'
import "../style/Main.css"

const TodayCommit = () => {
  return (
    <div className='Today_commit_wrap'>
        <div className='Today_commit_container'> 
          {/* <p>Your Today's Commit :</p>
          <span>숫자</span> */}
          <div className='Yesterday_commit_box'>
            <span>숫자</span>
            <p>My yesterday's commits</p>
          </div>
          <div className='Today_commit_box'>
            <span>숫자</span>
            <p>My today's commits</p></div>
        </div>
    </div>
  )
}

export default TodayCommit