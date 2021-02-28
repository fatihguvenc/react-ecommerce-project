import React from "react";
import { Link } from "react-router-dom";
// Custom CSS
import "./auth.css";

export default function Auth() {
  return (
    <>
      <li className="nav-item d-flex align-items-center">
        <div>
          <i className="fas fa-user login-icon me-2" />
          <Link className="login-text" to="/login">
            Login
          </Link>
        </div>
        <span className="me-2 ms-2 d-none d-lg-block"> or </span>
      </li>
      <li className="nav item d-flex align-items-center">
        <div>
          <i className="fas fa-user-plus login-icon me-2" />
          <Link className="signup-text" to="signup">
            Sign Up
          </Link>
        </div>
      </li>
    </>
  );
}
