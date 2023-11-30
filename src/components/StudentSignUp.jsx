import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import axios from "../api/axios";

const USER_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/;
const REGISTER_URL = "/auth/student";

const StudentSignUp = () => {
  const errRef = useRef();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const checkPassword = (e) => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_pwd").value;

    if (password !== confirmPassword) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkPassword();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email: user, password: pwd, role: "student" }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      // errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <p color="black">Signed up ✅</p>
          <a href="/login">Sign in</a>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <strong className="student-strong">
            Sign up as a <span>student</span>
          </strong>
          <div className="container">
            <form className="formfield" onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-5 col-form-label">
                  Email:
                </label>
              </div>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />

                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                ></p>
              </div>

              <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-5 col-form-label">
                  Password:
                </label>
              </div>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>{" "}
                  <span aria-label="underscore">_</span>
                </p>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="confirm_pwd"
                  className="col-sm-5 col-form-label"
                >
                  Confirm Password:
                </label>
              </div>

              <div className="col-sm-10">
                <input
                  type="password"
                  id="confirm_pwd"
                  className="form-control"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  Must match the first password input field.
                </p>
              </div>

              <button type="submit" id="check">
                Sign up
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default StudentSignUp;
