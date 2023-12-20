import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar-expand-lg bd-navbar sticky-top z-5">
        <div className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <Link to="/">
                <img
                  className="cbit-logo"
                  src="CBIT-LOGO.png"
                  alt="CBIT LOGO"
                />
              </Link>
            </div>
            <div>
              <ul className="nav-menu d-flex">
                <li className="nav-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/announcements">Announcements</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login">Log in</Link>
                </li>
                <li className="nav-item">
                  <Link to="/">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
