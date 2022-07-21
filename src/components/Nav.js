import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { VscTriangleDown } from 'react-icons/vsc'
import "../style/Main.css"

const Nav = () => {
  return (
    <div className='Nav_box'>
        <BsGithub className='Main_icon' size='30' color='black'/>
        <p className='Main_title'>Commit Competition</p>
        <div className='Main_link_bar'>
            <div>Main</div>
            <div>Ranking</div>
        </div>
        <img className='Nav_profile' src='https://avatars.githubusercontent.com/u/80657114?v=4' />
        <VscTriangleDown className='Nav_profile_detail'/>
    </div>
  )
}

export default Nav