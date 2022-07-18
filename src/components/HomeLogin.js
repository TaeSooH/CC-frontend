import React from 'react'
import "../style/Home.css";
import { BsGithub } from 'react-icons/bs';

const HomeLogin = () => {
    return (
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
    )
}

export default HomeLogin