import React from 'react'

const Login = () => {	
  return (
    <div className="signup_form">
		<p className="signup_title">Login</p>
		<div className="signup_input_box">
			<label>Email, username, or github name</label>
			<input className="signup_input" type={"text"} />
		</div>
		<div className="signup_input_box">
			<label>Password</label>
			<input className="signup_input" type={"password"} />
	</div>
		<button>Sign in</button>
		<div className="signup_bot">
			<p className="signup_bot_text">Have no account?</p>
			<p className="signup_bot_link"><a href="#">Sign up</a></p>
		</div>
	</div>
  )
}

export default Login