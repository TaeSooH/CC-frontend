import React from 'react'
import "../style/Main.css"

const TodayCommit = () => {
  return (
    <div className='Today_commit_wrap'>
        <div>
            <p>Today's Commit : {data.todayCommit}</p>
        </div>
        <div>
            <p>어떤 식으로 채울지 고민중..</p>
        </div>
    </div>
  )
}

export default TodayCommit