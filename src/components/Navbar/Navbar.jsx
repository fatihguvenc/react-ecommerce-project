import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// CSS
import "./Navbar.css";
// Components
import Auth from "../Auth/Auth";
import NavLogin from "../Auth/NavLogin";

export default function Navbar({ totalItems }) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLog = async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <header className="d-none d-lg-block">
        <nav className="navbar navbar-expand-lg navbar-dark position-relative">
          <div className="container">
            {/* Logo start */}
            <Link className="logo" to="/">
              <div className="logo1 navbar-brand">
                <div className="d-flex justify-content-between">
                  <span className="ps-2 logo-d">D</span>
                  <span className="pe-2 logo-s">S</span>
                </div>
                <h6 className="logo-disc">Developer Store</h6>
              </div>
            </Link>
            {/* Logo end */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="me-3 search-wrap my-auto d-none d-md-block">
                  <Link to="/search">
                    <i class="fas fa-search search-icon text-dark" />
                  </Link>
                </li>
                <li className="my-auto">
                  <Link className="cart-button me-3" to="/cart">
                    <button
                      type="button"
                      className="btn btn-light p-2 position-relative"
                    >
                      <i className="fas fa-shopping-cart me-2 shopping-icon">
                        <span className="cart-badge badge rounded-pill bg-danger text-center position-absolute">
                          {totalItems}
                        </span>
                      </i>

                      <span className="fw-bold ms-1">CART</span>
                    </button>
                  </Link>
                </li>
                {!currentUser ? (
                  <Auth />
                ) : (
                  <NavLogin handleLogout={handleLog} />
                )}
              </ul>
            </div>
          </div>
        </nav>
        {/* category start */}
        <ul className="categories d-flex justify-content-center border-bottom pb-2 text-uppercase fw-bold my-2">
          <li>
            <Link to="/tshirts">Tshirts</Link>
          </li>
          <li>
            <Link to="/mugs">Mugs</Link>
          </li>
          <li>
            <Link to="/hoodie">Hoodies</Link>
          </li>
          <li>
            <Link to="/sticker">Stickers</Link>
          </li>
        </ul>
        {/* category end */}
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark position-relative d-lg-none ">
        <div className="container">
          {/* Logo start */}
          <Link className="logo" to="/">
            <div className="logo1 navbar-brand">
              <div className="d-flex justify-content-between">
                <span className="ps-2 logo-d">D</span>
                <span className="pe-2 logo-s">S</span>
              </div>
              <h6 className="logo-disc">Developer Store</h6>
            </div>
          </Link>
          {/* Logo end */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="me-3 search-wrap my-auto d-none d-md-block">
                <Link to="/search">
                  <i class="fas fa-search search-icon text-dark" />
                </Link>
              </li>
              <li className="my-auto">
                <Link className="cart-button me-3" to="/cart">
                  <button
                    type="button"
                    className="btn btn-light p-1 position-relative"
                  >
                    <i className="fas fa-shopping-cart me-2 shopping-icon">
                      <span className="cart-badge badge rounded-pill bg-danger text-center position-absolute">
                        {totalItems}
                      </span>
                    </i>

                    <span className="fw-bold ms-1">CART</span>
                  </button>
                </Link>
              </li>
              {!currentUser ? <Auth /> : <NavLogin handleLogout={handleLog} />}
              <li>
                <Link to="/tshirts">Tshirts</Link>
              </li>
              <li>
                <Link to="/mugs">Mugs</Link>
              </li>
              <li>
                <Link to="/hoodie">Hoodies</Link>
              </li>
              <li>
                <Link to="/sticker">Stickers</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
