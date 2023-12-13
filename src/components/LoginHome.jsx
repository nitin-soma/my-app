import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./Navbar.css";

const LoginHome = () => {
  const context = useContext(AuthContext);
  const { auth } = context;

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
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a href="/announcements">Announcements</a>
                </li>
                <li className="nav-item">
                  <a href="/contactus">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a href="/">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div>
        <h1>Welcome, {auth.user}!</h1>
        <p>Your role is: {auth.roles}</p>
      </div>
    </>
  );
};

export default LoginHome;
