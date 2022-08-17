import React from 'react'
import DailyRank from '../components/DailyRank'
import MonthlyRank from '../components/MonthlyRank'
import TotallyRank from '../components/TotallyRank'
import Nav from '../components/Nav'
import "../style/Ranking.css"
import TopRanker from '../components/TopRanker'
import MyRank from '../components/MyRank'

const Ranking = () => {
  return (
    <div className='Rank_container'>
      <div className='Nav_fix'>
        <Nav />
      </div>
      <div className='Empty_box'></div>
      <div className='Rank_box'>
        <TopRanker />
        <div className='My_rank_box'>
          <p></p>
          <MyRank />
        </div>
        <div className='Totally_rank_box'>
          <p></p>
          <TotallyRank />
        </div>
      </div>
    </div>
  )
}

export default Ranking