import React from 'react'
import "../style/Main.css"

const Graph = () => {
  return (
    <div className='Graph_box_wrap'>
        <div className='Graph_select_menu'>
          <div>All</div>
          <div>Month</div>
          <div>Week</div>
        </div>
        <div className='Graph_box_graph'></div>
    </div>
  )
}

export default Graph