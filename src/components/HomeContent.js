import React from 'react'
import { AiOutlineCheck  } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { RiNumbersFill } from 'react-icons/ri';
import "../style/Home.css";

const HomeContent = () => {
  	return (
    	<div className='content_box'>
			<img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU'/>
			<li className='content'>
				<AiOutlineCheck className='icon' size='24' color='white'/>
				<p>Check your commits</p>
			</li>
			<li className='content'>    
				<BsPeopleFill className='icon' size='24' color='white'/>
				<p>Compete with others by the number of commits</p>
			</li>
			<li className='content'>
				<RiNumbersFill className='icon' size='24' color='white'/>
				<p>See your monthly commits by graph</p>
			</li>
		</div>
  	)
}

export default HomeContent