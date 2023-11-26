import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-expand-lg bd-navbar sticky-top">
        <nav className="navbar">
          <div className="nav-container d-flex justify-content-between">
            <div className="nav-brand">
              <a href="/">
                <img
                  className="cbit-logo"
                  src="CBIT-LOGO.png"
                  alt="CBIT LOGO"
                />
              </a>
            </div>
            <div>
              <ul className="nav-menu d-flex">
                <li className="nav-item">
                  <a href="/">Announcements</a>
                </li>
                <li className="nav-item">
                  <a href="/signup">Sign up/Log in</a>
                </li>
                <li className="nav-item">
                  <a href="/">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
