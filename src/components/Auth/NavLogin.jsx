import React from "react";
import { Link } from "react-router-dom";

export default function NavLogin(props) {
  return (
    <li className="nav-item dropdown my-auto">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div>
          <span className="fw-700 text-white">Profile</span>
        </div>
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Account
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            My Orders
          </a>
        </li>
        <li>
          <Link to="/favorites" className="dropdown-item">
            Favorites
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a onClick={props.handleLogout} className="dropdown-item" href="#">
            Logout
          </a>
        </li>
      </ul>
    </li>
  );
}
