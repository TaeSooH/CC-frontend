import React from 'react'
import "../style/Login.css"

const LoginMenu = () => {
  return (
    <div className='login'>
        <div className='Login_content'></div>
        <div className='Login_box'>
            <div className='login_page'>
                <div className='page_input_box'>
                    <label>Email or username</label>
                    <input  className='page_input' type={'text'} />
                </div>
                <div className='page_input_box'>
                <label>Password</label>
                    <input className='page_input' type={'password'} />
                </div>
                <button>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default LoginMenu