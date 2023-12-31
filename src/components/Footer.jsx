import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-s">
          <div>
            <a href="https://maps.app.goo.gl/ex8DF1E9V99uj1Py6" role="button">
              Locate us
            </a>
          </div>
          <div>
            <a href="https://www.cbit.ac.in/" role="button">
              CBIT Website
            </a>
          </div>
          <div>
            <a href="/contactus" role="button">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
