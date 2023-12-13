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
        <div className="messages"></div>
      </div>
    </>
  );
};

export default Announcements;
