import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="background">
      <nav id="anchors">
        <a href="/">Profile</a>
        <a href="/dashboard">Dashboard</a>
      </nav>

      <nav id="writeup">
        <h1>Get in touch</h1>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </p>
      </nav>

      <main>
        <section>
          <h3>BY PHONE/EMAIL</h3>
          <p className="para">
            email: example@domain.com
            <br />
            phone: XXXXX XXXXX
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <h3>HOURS OF OPERATION</h3>
          <p className="para"> 9:00 to 17:00, MON TO FRI(Excluding Holidays)</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 CBIT | Gandipet</p>
      </footer>
    </section>
  );
};

export default ContactUs;
