import React from "react";

import { Link } from "react-router-dom";

import "../css/Login.css";

const Login = () => {
  return (
    <div className="main-container">
      <h1>SIGN IN</h1>
      <p> Log in to your account</p>
      <div className="login-container">
        <input
          type="email"
          pattern="[^ @]*@[^ @]*"
          placeholder="Enter your email"
          required=""
        />
        <br />
        <br />
        <input type="text" placeholder="UserName" required />

        <br />
        <br />
        <input type="Password" placeholder="Password" />
      </div>
      <br />
      <div>
        <input className="Login-btn" type="submit" value="Submit" />
      </div>
      <h2>
        Don't have an account? <Link to="Signup"> Create one</Link>
      </h2>
    </div>
  );
};

export default Login;
