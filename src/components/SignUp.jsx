import React from "react";

const SignUp = () => {
  return (
    <>
      <p className="fs-1">Sign up as</p>
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
    </>
  );
};

export default SignUp;
