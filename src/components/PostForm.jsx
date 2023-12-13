import React, { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthProvider";
import "./PostForm.css";

const POST_URL = "/auth/updates";
const PostForm = ({ onPost }) => {
  const { auth, setAuth } = useAuth();
  const [content, setContent] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      console.log("in postForm");

      // Include the access token in the headers
      const response = await axios.post(
        POST_URL,
        { user: auth.user, content },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      onPost(); // Trigger a refresh of the posts after posting
      setContent(""); // Clear the input field
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

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
      <div className="create">
        <div className="container">
          <strong>Post an update</strong>
        </div>
        <div className="container-1">
          <form onSubmit={handlePost}>
            <textarea
              name="tweet"
              id="tweet"
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div>
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
