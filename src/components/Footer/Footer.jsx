import React from "react";
// React Router
import { Link } from "react-router-dom";
// Custom CSS
import "./footer.css";

export default function Footer() {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <Link className="logo footer-area d-block" to="/">
              <div className="logo1 navbar-brand">
                <div className="d-flex justify-content-between">
                  <span className="ps-2 logo-d footer-d">D</span>
                  <span className="pe-2 logo-s">S</span>
                </div>
                <h6 className="logo-disc">Developer Store</h6>
              </div>
            </Link>
          </div>
          <div className="col-sm-4">
            <h5 className="fw-bold text-white text-center">Products</h5>
            <ul className="list-unstyled text-small text-center">
              <li>
                <Link to="/tshirts" className="footer-item">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/mugs" className="footer-item" href="#">
                  Mugs
                </Link>
              </li>
              <li>
                <Link to="hoodie" className="footer-item" href="#">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="sticker" className="footer-item" href="#">
                  Stickers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5 className="fw-bold text-white text-center">About</h5>
            <ul className="list-unstyled text-small text-center">
              <li>
                <Link to="/team" className="footer-item" href="#">
                  Team
                </Link>
              </li>
              <li>
                <a className="footer-item" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="footer-item" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="footer-item" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
