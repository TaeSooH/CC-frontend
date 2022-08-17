import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { VscTriangleDown } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import "../style/Main.css"

const Nav = () => {
  return (
    <div className='Nav_box'>
      <BsGithub className='Main_icon' size='30' color='white'/>
      <p className='Main_title'>Commit Competition</p>
      <div className='Main_link_bar'>
        <Link to={'/main'} style={{ textDecoration: 'none' }}>
          <div>Main</div>
        </Link>
        <Link to={'/ranking'} style={{ textDecoration: 'none' }}>
          <div>Ranking</div>
        </Link>
      </div>
      <img className='Nav_profile' src='https://avatars.githubusercontent.com/u/80657114?v=4' />
      <VscTriangleDown className='Nav_profile_detail' color='white'/>
    </div>
  )
}

export default Nav