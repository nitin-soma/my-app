import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import "./LogIn.css";

const LOGIN_URL = "/auth/login";
const LogIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        { email: user, password: pwd },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      // console.console.log(roles);
      setAuth({ user, pwd, accessToken });
      console.log("checkpoint");
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <div>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <strong>Log In</strong>
          <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email:{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    ref={userRef}
                    className="form-control-sm"
                    autoComplete="off"
                    id="email"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Password:{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control-sm"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" id="check">
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div className="link-to-signup">
            <p>
              Didn't have an account? <a href="/signup">Sign up here!</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
