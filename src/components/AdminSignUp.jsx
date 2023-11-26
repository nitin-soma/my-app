import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";

const AdminSignUp = () => {
  const [error, setError] = useState(false);

  const checkPassword = (e) => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPassword();

    const termsAndConditions =
      document.getElementById("termsAndConditions").checked;

    if (!termsAndConditions) {
      alert("Please accept the terms and conditions.");
    } else if (!error) {
      alert("Form submitted successfully.");
    }
  };

  return (
    <>
      <p>
        Sign up as <span>admin</span>
      </p>
      <div className="container">
        <form className="formfield" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control-sm"
              name="name"
              id="name"
              placeholder="name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control-sm"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              className="form-control-sm"
              name="domain"
              id="domain"
              placeholder="department or organization"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control-sm"
              name="password"
              id="password"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password-check">Confirm Password</label>
            <input
              type="password"
              className="form-control-sm"
              name="confirmPassword"
              id="confirmPassword"
              onChange={checkPassword}
              required
            />
          </div>

          {error && <p className="error">Passwords do not match.</p>}

          <div className="mb-3">
            <label htmlFor="dob">Date of birth</label>
            <input
              type="date"
              className="form-control-sm"
              name="dob"
              id="dob"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
            />
            <label htmlFor="termsAndConditions">
              Accept terms and conditions
            </label>
          </div>

          <button type="submit" id="check">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminSignUp;
