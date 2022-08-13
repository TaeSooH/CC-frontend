import React from 'react'
import DailyRank from '../components/DailyRank'
import MonthlyRank from '../components/MonthlyRank'
import TotallyRank from '../components/TotallyRank'
import "../style/Ranking.css"

const Ranking = () => {
  return (
    <div className='container'>
        <div>
            <p></p>
            <DailyRank />
        </div>
        <div>
            <p></p>
            <MonthlyRank />
        </div>
        <div>
            <p></p>
            <TotallyRank />
        </div>
    </div>
  )
}

export default Ranking