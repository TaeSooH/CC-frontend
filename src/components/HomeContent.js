import React from 'react'
import { AiOutlineCheck  } from 'react-icons/ai';
import { BsPeopleFill, BsGithub } from 'react-icons/bs';
import { RiNumbersFill } from 'react-icons/ri';
import "../style/Home.css";

const LoginContent = () => {
  return (
    <div className='container'>
        <ul className='content_box'>
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
        </ul>
        <div className='login_menu'>
            <div className='login_form'>
                <div className='login_input_box'>
                    <label>Email or username</label>
                    <input  className='login_input' type={'text'} />
                </div>
                <div className='login_input_box'>
                    <label>Password</label>
                    <input className='login_input' type={'password'} />
                </div>
                <button>Log in</button>
            </div>
            <div className='signup_box'>
                <BsGithub size='70' color='black'/>
                <p>See who's committing in<br/>
                   the world right now</p>
                <span>Join Our Website</span>
                <button className='signup_button'>Sign up</button>
                <button className='login_button'>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default LoginContent