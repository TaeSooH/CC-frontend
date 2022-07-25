import React from 'react'
import "../style/Main.css"
import Graph from './Graph'

const GraphBox = () => {
  return (
    <div className='Graph_box_wrap'>
        <div className='Graph_select_menu'>
          <div>All</div>
          <div>Month</div>
          <div>Week</div>
        </div>
        <div className='Graph_box_graph'>
          <Graph />
        </div>
    </div>
  )
}

export default GraphBox