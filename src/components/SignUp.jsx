import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import Footer from "./Footer";
import "./Footer.css"

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="sign-up-page">
        <strong>Sign up as</strong>
        <div className="sign-up-options">
          <a
            className="btn btn-primary btn-with-space"
            href="/student"
            role="button"
          >
            Student
          </a>
          <a
            className="btn btn-primary btn-with-space"
            href="/admin"
            role="button"
          >
            Admin
          </a>
        </div>

        <div>
          <p>
            Already signed up? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
