import React from 'react'
import DailyRank from '../components/DailyRank'
import MonthlyRank from '../components/MonthlyRank'
import TotallyRank from '../components/TotallyRank'
import Nav from '../components/Nav'
import "../style/Ranking.css"

const Ranking = () => {
  return (
    <div className='Rank_container'>
      <div className='Nav_fix'>
        <Nav />
      </div>
      <div className='Empty_box'></div>
      <div className='Each_rank_box'>
        <p></p>
        <DailyRank />
      </div>
      <div className='Each_rank_box'>
        <p></p>
        <MonthlyRank />
      </div>
      <div className='Each_rank_box'>
        <p></p>
        <TotallyRank />
      </div>
    </div>
  )
}

export default Ranking