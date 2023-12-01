import React from "react";

const AdminHome = () => {
  return (
    <>
      <header className="navbar-expand-lg bd-navbar sticky-top">
        <nav className="navbar">
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
                <ul className="nav-item">
                  <a href="/addpost">
                    <img
                      src="https://fontawesome.com/icons/plus?f=classic&s=solid&pc=%23190a1a"
                      alt="add-post"
                    />
                  </a>
                </ul>
                <li className="nav-item">
                  <a href="/">
                    <img
                      src="https://fontawesome.com/icons/circle-user?f=classic&s=solid"
                      alt="Profile"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminHome;
