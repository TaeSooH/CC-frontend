import React from 'react'
import "../style/Ranking.css"
import TotallyRank from '../components/TotallyRank'
import Nav from '../components/Nav'
import TopRanker from '../components/TopRanker'

const Ranking = () => {
  return (
    <div className='Rank_container'>
      <div className='Nav_fix'>
        <Nav />
      </div>
      <div className='Empty_box'></div>
      <div className='Rank_box'>
        <div className='Top_title'>
          <p>명예의 전당</p>
        </div>
        <div className='Top_ranker_box'>
          <TopRanker />
          <TopRanker />
          <TopRanker />
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