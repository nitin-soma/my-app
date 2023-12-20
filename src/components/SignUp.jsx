import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import Footer from "./Footer";
import "./Footer.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="sign-up-page">
        <div>
          <strong className="sign-up-heading">Sign up as</strong>
        </div>
        <div className="sign-up-options">
          <Link
            className="btn btn-primary btn-with-space"
            to="/student"
            role="button"
          >
            Student
          </Link>
          <Link
            className="btn btn-primary btn-with-space"
            to="/admin"
            role="button"
          >
            Admin
          </Link>
        </div>

        <div>
          <p>
            Already signed up? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
