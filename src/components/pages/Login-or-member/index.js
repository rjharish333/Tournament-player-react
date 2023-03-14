import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function LoginOrMember() {
  return (
    <>
      <div className="login-member-block">
        <div className="text-section">
          <h1 className="title-section">Login/Become a member</h1>
        </div>
      </div>
      <div className="login-bottom-section">
        <div className="button-section">
          <p className="text-white ingress">
            If you want to become a Tournament Players Organization (TPO)
            member, click on “Register” and follow the instructions. Already a
            member, click on “Login”.
          </p>
          <div className="credentials-btn">
            <Link className="button" to="/register">
              Register
            </Link>
            <a className="button" href={process.env.REACT_APP_LOGIN_URL}>
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOrMember;
