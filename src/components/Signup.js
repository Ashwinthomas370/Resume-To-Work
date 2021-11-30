import React from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main-container">
      <h1>SIGN UP </h1>
      <p>Create an account</p>
      <div className="signup-container">
        <input type="email" placeholder="Email" required />
        <br />
        <br />
        <input type="text" placeholder="Username" required />
        <br />
        <br />

        <input type="password" placeholder="password" />
        <br />
        <br />
        <input type="password" placeholder="confirm passowrd" />
      </div>
      <div>
        <h2>
          I agree to the
          <Link to="/">terms and conditions</Link>
        </h2>
        <button className="Login-btn" type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
