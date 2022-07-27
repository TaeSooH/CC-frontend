import React from 'react'
import "../style/Main.css"
import { BsFillPeopleFill, BsDot } from 'react-icons/bs'
import { BiBuilding } from "react-icons/bi"


const Profile = () => {
  return (
    <div className='Profile_wrap'>
      <div className='Profile_box'>
        <img src='https://avatars.githubusercontent.com/u/80657114?v=4' />
        <h2>Taehyun Lee</h2>
        <span>LLTae2</span>
        <p>알고리즘을 해야 한다고 생각함</p>
        <div className='Profile_follower'>
          <BsFillPeopleFill className='Profile_icon' size='3.5vh' color='gray'/>
          <span className='F_number'>15</span>
          <span className='F_font'>followers</span>
          <BsDot />
          <span className='F_number'>15</span>
          <span className='F_font'>following</span>
        </div>
        <div className='Profile_company'>
          <BiBuilding className='Profile_icon' size='2.6vh' color='gray'/>
          <p>Busan Software Meister High School</p>
        </div>
      </div>
    </div>
  )
}

export default Profile