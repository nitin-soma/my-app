import React from "react";
import "./Announcements.css";

const Announcements = () => {
  // Runtime error: comeback later
  function toggleFullMessage(container) {
    var fullMessage = container.querySelector(".full-message");
    if (
      fullMessage.style.display === "none" ||
      fullMessage.style.display === ""
    ) {
      fullMessage.style.display = "block";
    } else {
      fullMessage.style.display = "none";
    }
  }
  return (
    <>
      <div className="page-container">
        <header>
          <strong>ANNOUNCEMENTS</strong>
        </header>

        <nav>
          <a href="/">Home</a>
          <a href="/">Contact Us</a>
          <a href="/">Profile</a>
        </nav>
        <div className="postMessage"></div>
        <div className="messages">
          <div className="message-container" onClick={toggleFullMessage}>
            <div className="message-info">
              <h2>Placement Cell</h2>
              <time>12/1/2023, 9:34</time>
            </div>
            <p>Company Name</p>
            <div className="full-message">
              <p>Message</p>
              <h4>PC</h4>
              <h5>CBIT</h5>
            </div>
          </div>
          <div className="message-container" onClick={toggleFullMessage}>
            <div className="message-info">
              <h2>Placement Cell</h2>
              <time>12/1/2023, 9:34</time>
            </div>
            <p>Company Name</p>
            <div className="full-message">
              <p>Message</p>
              <h4>PC</h4>
              <h5>CBIT</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
