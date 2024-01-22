import React from "react";
import "../Pages/css/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="signup-box">
        <h4>Sign up</h4>
        <div className="login-input">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address " />
          <input type="password" placeholder="Password" />
          <button type="submit">Continue</button>
          <p>
            Already have an account? <span>Login here</span>
          </p>
        </div>
        <div className="login-check">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
