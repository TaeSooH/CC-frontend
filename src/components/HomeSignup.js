import React from "react";
import { CgProfile } from "react-icons/cg"
import "../style/Signup.css"

const LoginMenu = () => {
	return (
		<div className="signup_form">
			<p className="signup_title">Sign Up</p>
			<div className="signup_input_box">
				<label>Github name</label>
				<input className="signup_input" type={"text"} />
			</div>
			<div className="signup_input_box">
				<label>Email or username</label>
				<input className="signup_input" type={"text"} />
			</div>
			<div className="signup_input_box">
				<label>Password</label>
				<input className="signup_input" type={"password"} />
			</div>
			<button>Sign up</button>
			<div className="signup_bot">
				<p className="signup_bot_text">Already have an account?</p>
				<p className="signup_bot_link"><a href="#">Sign in</a></p>
			</div>
		</div>
	);
};

export default LoginMenu;
