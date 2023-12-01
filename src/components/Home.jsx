import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Navbar from "./Navbar";
import "./Navbar.css";
import Footer from "./Footer";
import "./Footer.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="phrase">
        <strong>
          Your Future Starts Here
          <br />
          Unlock Your Career Potential!
        </strong>
      </div>
      <Footer />
    </>
  );
};

export default Home;
