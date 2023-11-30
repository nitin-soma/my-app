import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <header className="navbar-expand-lg bd-navbar sticky-top">
        <div className="navbar">
          <div className="nav-container">
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
                  <a href="/announcements">Announcements</a>
                </li>
                <li className="nav-item">
                  <a href="/signup">Sign up</a>
                </li>
                <li className="nav-item">
                  <a href="/login">Log in</a>
                </li>
                <li className="nav-item">
                  <a href="/">Profile</a>
                </li>
              </ul>
            </div>
            {/* <div className="nav-grid">
              <button className="btn button-1" type="button">
                <span>Log in</span>
              </button>
              <button className="btn button-2" type="button">
                <span>Sign up</span>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
